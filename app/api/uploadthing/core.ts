import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError } from 'uploadthing/server';

const f = createUploadthing();

const auth = (req: Request) => ({ id: 'fakeId' }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug

  fileUploads: f({
    // Define multiple file types
    image: { maxFileSize: '4MB', maxFileCount: 10 },
    pdf: { maxFileSize: '4MB', maxFileCount: 10 },
    text: { maxFileSize: '4MB', maxFileCount: 10 },
    audio: { maxFileSize: '8MB', maxFileCount: 10 },
    video: { maxFileSize: '16MB', maxFileCount: 5 },
    // Add office document types
    'application/msword': { maxFileSize: '4MB', maxFileCount: 10 },
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': {
      maxFileSize: '4MB',
      maxFileCount: 10,
    },
    'application/vnd.ms-excel': { maxFileSize: '4MB', maxFileCount: 10 },
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': {
      maxFileSize: '4MB',
      maxFileCount: 10,
    },
    'application/vnd.ms-powerpoint': { maxFileSize: '4MB', maxFileCount: 10 },
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':
      { maxFileSize: '4MB', maxFileCount: 10 },
    // For ZIP files
    'application/zip': { maxFileSize: '16MB', maxFileCount: 5 },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.ufsUrl);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: '2MB',
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // This code runs on your server before upload
      const user = await auth(req);

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      console.log('Upload complete for userId:', metadata.userId);

      console.log('file url', file.ufsUrl);

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
