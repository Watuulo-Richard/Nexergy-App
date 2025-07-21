import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaAdapter } from '@auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import { compareSync } from 'bcrypt-ts';
import type { Adapter } from 'next-auth/adapters';
import { NextAuthOptions } from 'next-auth';
import { prismaClient } from '@/prisma/db';
import { JWT } from 'next-auth/jwt';

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient as any) as Adapter,
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login-page',
  },
  providers: [
    // EmailProvider({
    //   server: process.env.GMAIL_EMAIL_SERVER || "", // any SMTP server will work
    //   from: process.env.EMAIL_FROM || "",
    //   // maxAge: 24 * 60 * 60, // How long email links are valid for (default 24h)
    // }),
    GoogleProvider({
      //Checking if the role exists and if not add USER By default
      // profile(profile) {
      //   return { role: profile.role ?? "USER", ... }
      // },
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
      allowDangerousEmailAccountLinking: true,
      httpOptions: {
        timeout: 10000,
      },
      profile(profile) {
        return {
          id: profile.sub,
          name: profile.name || `${profile.given_name}, ${profile.family_name}`,
          firstName: profile.given_name,
          lastName: profile.family_name,
          email: profile.email,
          image: profile.picture,
          role: 'CUSTOMER',
          token: Math.floor(Math.random() * 1000000),
        };
      },
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'watuulorichard@gmail.com',
        },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          console.log(
            'Authorize function called with credentials:',
            credentials,
          );
          // Check if user credentials are Correct
          if (!credentials?.email || !credentials?.password) {
            throw { error: 'No Inputs Found', status: 401 };
          }
          console.log('Pass 1 checked ');
          //Check if user exists
          const existingUser = await prismaClient.user.findUnique({
            where: { email: credentials.email },
          });

          if (!existingUser) {
            console.log('No user found');
            throw { error: 'No user found', status: 401 };
          }

          console.log('Pass 2 Checked');
          console.log(existingUser);
          let passwordMatch: boolean = false;
          //Check if Password is correct
          if (existingUser && existingUser.password) {
            // if user exists and password exists
            passwordMatch = compareSync(
              credentials.password,
              existingUser.password,
            );
          }
          if (!passwordMatch) {
            console.log('Password incorrect');
            throw { error: 'Password Incorrect', status: 401 };
          }
          console.log('Pass 3 Checked');
          const user = {
            id: existingUser.id,
            firstName: existingUser.firstName,
            lastName: existingUser.lastName,
            email: existingUser.email ?? '',
            role: existingUser.role,
          };
          //
          console.log('User Compiled');
          console.log(user);
          return user;
        } catch (error) {
          console.log('aLL Failed');
          console.log(error);
          throw { error: 'Something went wrong', status: 401 };
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account?.provider === 'google') {
        try {
          const existingUser = await prismaClient.user.findUnique({
            where: { email: user.email! },
          });

          if (existingUser) {
            // Link Google account to existing user
            await prismaClient.account.upsert({
              where: {
                provider_providerAccountId: {
                  provider: account.provider,
                  providerAccountId: account.providerAccountId,
                },
              },
              update: {
                access_token: account.access_token,
                expires_at: account.expires_at,
                refresh_token: account.refresh_token,
              },
              create: {
                userId: existingUser.id,
                provider: account.provider,
                providerAccountId: account.providerAccountId,
                access_token: account.access_token,
                expires_at: account.expires_at,
                refresh_token: account.refresh_token,
                type: account.type,
              },
            });
            return true;
          } else {
            // Create new user
            await prismaClient.user.create({
              data: {
                email: user.email!,
                firstName: user.firstName,
                lastName: user.lastName,
                image: user.image || '',
                role: 'CUSTOMER',
                password: '',
                token: Math.floor(Math.random() * 1000000),
              },
            });
            return true;
          }
        } catch (error) {
          console.error('Error in signIn callback:', error);
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }) {
      const dbUser = await prismaClient.user.findFirst({
        where: { email: token?.email ?? '' },
      });
      if (!dbUser) {
        token.id = user!.id;
        return token;
      }
      return {
        id: dbUser.id,
        firstName: dbUser.firstName,
        lastName: dbUser.lastName,
        email: dbUser.email,
        role: dbUser.role,
        picture: dbUser.image,
      } as JWT ;
    },
    session({ session, token }) {
      // console.log(session, 'lllll')
      if (token && session.user) {
        session.user.id = token.id;
        session.user.firstName = token.firstName;
        session.user.lastName = token.lastName;
        session.user.email = token.email;
        session.user.image = token.picture;
        session.user.role = token.role;
      }
      return session;
    },
  },
};
