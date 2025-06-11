"use server";

import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { role_user } from "@/generated/prisma";
import { revalidatePath } from "next/cache";

export async function addMember(data: FormData) {
  const session = await auth();

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  const licence_number = data.get("licence_number") as string;
  const omzet = data.get("omzet") as string;
  const image_url = data.get("image_url") as string | null;

  try {
    await prisma.user.update({
      where: { email: session.user.email },
      data: {
        role: role_user.Pembeli,
        supplier: {
          create: {
            member: false,
            supplier_data: {
              create: {
                license: licence_number,
                omzet,
                photo_profile: image_url || undefined,
              },
            },
          },
        },
      },
    });
    revalidatePath("/");
    revalidatePath("/daftar");
    revalidatePath("/list");
    return { success: true };
  } catch (error) {
    console.error("Gagal mendaftar sebagai supplier", error);
    throw new Error("Sudah terdaftar atau terjadi kesalahan");
  }
}

export async function updateSupplierImage(supplierId: string, imageUrl: string) {
  await prisma.supplier.update({
    where: { id: supplierId },
    data: {
      supplier_data: {
        update: {
          photo_profile: imageUrl,
        },
      },
    },
  });
  revalidatePath("/profile");
  return { success: true };
}
