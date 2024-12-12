import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { db } from "~/server/db";
import { images } from "~/server/db/schema";

const f = createUploadthing();

// const auth = (req: Request) => ({ id: "fakeId" }); // Fake auth function

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({
    image: {
      /**
       * For full list of options and defaults, see the File Route API reference
       * @see https://docs.uploadthing.com/file-routes#route-config
       */
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      // try {
      //   await db.insert(images).values({
      //     name: "test.jpg",
      //     url: "http://test.url",
      //   });
      //   console.log("Test insert successful");
      // } catch (err) {
      //   console.error("Database test error:", err);
      // }

      // This code runs on your server before upload
      const user = await auth();

      // If you throw, the user will not be able to upload
      if (!user.userId) throw new UploadThingError("Unauthorized");

      console.log(user.userId);
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.userId };
      
    })
    .onUploadComplete(async ({ metadata, file }) => {
      try {
        console.log("Upload complete for userId:", metadata.userId);
        console.log(file.url);
        console.log(file.name);
    
        // Insert image into db
        await db.insert(images).values({
          name: file.name,
          url: file.url,
        });
    
        console.log("Database insert successful");
    
        // Return the metadata to client
        return { uploadedBy: metadata.userId };
      } catch (err) {
        console.error("Error in onUploadComplete:", err);
        throw new UploadThingError("Callback failed");
      }
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
