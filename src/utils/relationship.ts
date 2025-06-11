"use server";
import { Prisma } from "@/generated/prisma";
export type data_supplier = Prisma.supplier_dataGetPayload<{
  include: {
    supplier: {
      include: {
        user: true;
      };
    };
  };
}>;

export type fruitGetPayload = Prisma.fruitGetPayload<{
  include:{
    price: true;
    supplier:true
  }
}>

export type userGetPayload = Prisma.UserGetPayload<{
  include: {
    accounts: true;
    pembeli: {
      include: {
        transaction: true;
      };
    };
    supplier: {
      include: {
        supplier_data: {
          include: {
            supplier: {
              include: {
                user: true;
              };
            };
          };
        };
        fruit: {
          include:{
            price: true,
            supplier: true
          }
        };
        user: true;
      };
    };
    sessions: true;
  };
}>;
