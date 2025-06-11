"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function upsertFruit(data: FormData, supplierId: string) {
  const id = data.get("id") as string | null;
  const fruit = data.get("fruit") as string;
  const stock = parseInt(data.get("stock") as string);
  const price = data.get("price") as string;
  const image_url = data.get("image_url") as string | null;

  if (id) {
    // Update existing fruit
    await prisma.fruit.update({
      where: { id },
      data: {
        name: fruit,
        stock,
        isVerif: false,
        status_fruit: stock == 0 ? "empty_stock" : "ready_stock",
        image: image_url,
        price: {
          update: {
            price,
            date: new Date(),
          },
        },
      },
    });
  } else {
    // Create new fruit and link to supplier via supply_fruit
    await prisma.fruit.create({
      data: {
        name: fruit,
        stock,
        status_fruit: stock == 0 ? "empty_stock" : "ready_stock",
        isVerif: false,
        image: image_url,
        price: {
          create: {
            price,
            date: new Date(),
          },
        },
        supplier: {
          connect: {
            id: supplierId,
          },
        },
      },
    });
  }
  revalidatePath("/profile");
  revalidatePath("/admin");
  revalidatePath("/list");
  return { success: true };
}

export async function deleteFruit(id: string) {
  await prisma.fruit.delete({
    where: { id },
  });
  revalidatePath("/profile");
  revalidatePath("/admin");
  revalidatePath("/list");
  return {
    success: true,
  };
}


export async function editFruit(data: {
  id: string;
  stock: number;
}) {
  try {
    await prisma.fruit.update({
      where: { id: data.id },
      data: {
        stock: data.stock,
      },
    });
    revalidatePath('/list');
    revalidatePath('/profile');
    return { success: true };
  } catch (error) {
    console.error("Edit fruit failed:", error);
    return { success: false };
  }
}
