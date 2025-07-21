import { baseUrl } from "@/types/types";
import { User } from "@prisma/client";

// Add revalidate time (in seconds) for ISR
const REVALIDATE_TIME = 60; // 1 minute
export async function getUserById(id: string) {
    const userAPIRoute = `${baseUrl}/api/v1/signupAPI/${id}`
    try {
        const response = await fetch(userAPIRoute, { next: { revalidate: REVALIDATE_TIME } })
        const user = await response.json()
        // console.log(user, 'Finally Am In The System...👍🏾');
        return user.data as User
    } catch (error) {
        console.log(error);
        return null
    }
}