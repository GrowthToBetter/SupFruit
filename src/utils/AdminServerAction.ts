"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPendingFruits() {
  return await prisma.fruit.findMany({
    where: { isVerif: false },
    include: {
      supplier: {
        include: {
          user: true,
        },
      },
    },
  });
}

export async function getFruits() {
  return await prisma.fruit.findMany({
    include: {
      supplier: {
        include: {
          user: true,
        },
      },
    },
  });
}

export async function getPendingSuppliers() {
  return await prisma.supplier.findMany({
    where: { member: false },
    include: { user: true, supplier_data: true },
  });
}

export async function verifyFruit(id: string) {
  try {
    await prisma.fruit.update({ where: { id }, data: { isVerif: true } });
    revalidatePath("/admin");
    revalidatePath("/profile");
    revalidatePath("/list");
    return { success: true };
  } catch {
    return { success: false };
  }
}

export async function verifySupplier(id: string) {
  try {
    await prisma.supplier.update({
      where: { id },
      data: { member: true, user: { update: { role: "Supplier" } } },
    });
    revalidatePath("/admin");
    revalidatePath("/profile");
    return { success: true };
  } catch {
    return { success: false };
  }
}
export async function deniedSupplier(id: string) {
  try {
    await prisma.supplier.delete({ where: { id } });
    revalidatePath("/admin");
    revalidatePath("/profile");
    return { success: true };
  } catch {
    return { success: false };
  }
}
export async function deniedFruit(id: string) {
  try {
    await prisma.fruit.delete({ where: { id } });
    revalidatePath("/admin");
    revalidatePath("/profile");
    return { success: true };
  } catch {
    return { success: false };
  }
}
