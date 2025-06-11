import { getServerSession } from "@/auth";
import { prisma } from "@/lib/prisma";
import Hero from "@/components/profile/Hero";
import { redirect } from "next/navigation";
import { userGetPayload } from "@/utils/relationship";

export default async function Profile() {
  const session = await getServerSession();

  if (!session?.user?.email) {
    redirect("/auth/signin");
  }

  // Cari user dan ambil hanya relasi yang relevan (tidak null)
  const user = await prisma.user.findFirst({
    where: { id: session?.user?.id },
    include: {
      accounts: true,
      pembeli: {
        include: {
          transaction: true,
        },
      },
      supplier: {
        include: {
          supplier_data: {
            include: {
              supplier: {
                include: {
                  user: true,
                },
              },
            },
          },
          fruit: {
            include: {
              supplier: true,
              price: true,
            },
          },
          user: true,
        },
      },
      sessions: true,
    },
  });

  if (!user) {
    redirect("/auth/signin");
  }

  return <Hero user={user as userGetPayload} />;
}
