export interface Product {
  id: string;
  name: string;
  price_id: string;
  supplier_id: string;
  image: string | null;
  description: string | null;
  product_type: "fruit" | "animal";
  price: Price;
  supplier: Supplier;
}

interface Price {
  id: string;
  price: string;
  date: Date;
}

interface Supplier {
  user_id: string;
  user: User;
}

interface User {
  id: string;
  name: string | null;
  image: string | null;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
}

export type ProductSectionVariant = "general" | "category";
