export enum ProductCategory {
  FRUIT = "fruit",
  ANIMAL = "animal",
  VEGETABLE = "vegetable",
  DAIRY = "dairy",
  MEAT = "meat",
  SEAFOOD = "seafood",
}

export interface Product {
  id: number;
  name: string;
  price: string;
  supplier: string;
  image: string;
  description: string;
  category: ProductCategory;
  purchaseCount: number; // For determining viral products
  shipping: {
    location: string;
    cost: string;
  };
  trending?: boolean;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
}

export type ProductSectionVariant = "general" | "viral" | "category";

export interface ProductFilterOptions {
  category?: ProductCategory;
  minPurchaseCount?: number;
  limit?: number;
}
