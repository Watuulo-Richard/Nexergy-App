import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UploadButton } from "@/lib/uploadthing";
// import { UploadButton } from "@/lib/uploadthing";
// import { UploadButton } from "@/lib/uploadthing";
import Image from "next/image";
import React from "react";
type ImageInputProps = {
  title: string;
  imageUrl: string | null | undefined;
  setImageUrl: any;
  endpoint: any;
};
export default function ImageInput({
  title,
  imageUrl,
  setImageUrl,
  endpoint,
}: ImageInputProps) {
  return (
    <div className="overflow-hidden px-0 rounded-lg border border-gray-200 dark:border-[#1F1F23]">
      <div className="px-6 pb-2">
        <h3>{title}</h3>
      </div>
      <CardContent>
        <div className="grid gap-2">
          <Card className="">
            <Image
              alt={title}
              className="h-40 w-full rounded-md object-contain"
              height="300"
              src={imageUrl || "/Fuel-Image-Upload.svg"}
              width="300"
            />
          </Card>
          <UploadButton
            className="ut-button:bg-red-500 ut-button:w-full"
            endpoint={endpoint}
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);

              setImageUrl(res[0].url);
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </CardContent>
    </div>
  );
}
