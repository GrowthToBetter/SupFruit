import { role_user } from "@/generated/prisma";

declare module "next-auth" {
  interface User {
    role: role_user;
    id: string;
  }

  interface Session {
    user: User & {
      id: string;
      role: role_user;
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role: role_user;
    id: string;
    tokenUpdatedAt: number;
  }
}
