"use server";

import cloudinary from "@/lib/cloudinary";

const CLOUDINARY_FOLDER = "supfruit";

export const uploadImageToCloudinary = async (input: {
  base64: string;
  publicId: string;
}) => {
  try {
    const result = await cloudinary.uploader.upload(input.base64, {
      folder: CLOUDINARY_FOLDER,
      public_id: input.publicId,
      resource_type: "image",
    });

    return {
      url: result.secure_url,
      publicId: result.public_id,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Cloudinary upload error:", error);
    console.error("Cloudinary upload error:", {
      message: error?.message,
      name: error?.name,
      http_code: error?.http_code,
      details: error,
    });
    throw new Error(error?.message ?? "Failed to upload image to Cloudinary");
  }
};
