"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function upsertFruit(data: FormData, supplierId: string) {
  const id = data.get("id") as string | null;
  const fruit = data.get("fruit") as string;
  const stock = parseInt(data.get("stock") as string);
  const price = data.get("price") as string;

  if (id) {
    // Update existing fruit
    await prisma.fruit.update({
      where: { id },
      data: {
        name: fruit,
        stock,
        isVerif: false,
        status_fruit: stock == 0 ? "empty_stock" : "ready_stock",
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
    const newFruit = await prisma.fruit.create({
      data: {
        name: fruit,
        stock,
        status_fruit: stock == 0 ? "empty_stock" : "ready_stock",
        isVerif: false,
        price: {
          create: {
            price,
            date: new Date(),
          },
        },
      },
    });

    await prisma.supply_fruit.create({
      data: {
        fruit_id: newFruit.id,
        supplier_id: supplierId,
      },
    });
  }
  revalidatePath("/profile");
}

export async function deleteFruit(id: string) {
  return await prisma.fruit.delete({
    where: { id },
  });
}
