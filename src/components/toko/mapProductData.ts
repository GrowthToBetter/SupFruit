import { Product } from "./types";

export const mapFruitsToProducts = (fruits: Product[]): Product[] => {
  return fruits.map((fruit) => ({
    id: fruit.id, // Convert string to number
    name: fruit.name,
    price_id: fruit.price_id,
    supplier_id: fruit.supplier_id,
    image: fruit.image,
    description: fruit.description,
    product_type: fruit.product_type,
    price: {
      id: fruit.price.id,
      price: fruit.price.price,
      date: fruit.price.date,
    },
    supplier: {
      user_id: fruit.supplier.user_id,
      user: {
        id: fruit.supplier.user.id,
        name: fruit.supplier.user.name || "Unknown Supplier",
        image: fruit.supplier.user.image || null,
      },
    },
  }));
};
