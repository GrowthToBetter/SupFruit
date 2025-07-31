export enum ProducType {
  FRUIT = "fruit",
  ANIMAL = "animal",
}

interface Price {
  id: number;
  price: number;
  date: Date;
}

interface Supplier {
  user_id: string;
  user: User;
}

interface User {
  id: string;
  name: string;
  image?: string;
}

export interface Product {
  id: number;
  name: string;
  price_id: string;
  supplier_id: string;
  image?: string;
  description?: string;
  category: ProducType;
  price: Price;
  supplier: Supplier;
}

export interface SlideData {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  backgroundColor: string;
}

export type ProductSectionVariant = "general" | "category";

export interface ProductFilterOptions {
  category?: ProducType;
  minPurchaseCount?: number;
  limit?: number;
}

// Converted product data matching the new format
export const allProducts: Product[] = [
  // FRUIT PRODUCTS
  {
    id: 1,
    name: "Lemon California",
    price_id: "price_1",
    supplier_id: "supplier_1",
    category: ProducType.FRUIT,
    description:
      "Lemon California adalah lemon segar berkualitas tinggi yang cocok untuk berbagai keperluan masakan dan minuman. Buah ini memiliki rasa asam yang segar dan aroma yang khas.\n\nDipetik langsung dari kebun dengan standar kualitas terbaik, lemon ini cocok untuk membuat jus, bumbu masakan, atau sebagai garnish minuman.",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 1,
      price: 15000,
      date: new Date("2024-01-15"),
    },
    supplier: {
      user_id: "user_1",
      user: {
        id: "user_1",
        name: "Ryo Haryanto Anggayni",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 2,
    name: "Jeruk Manis",
    price_id: "price_2",
    supplier_id: "supplier_2",
    category: ProducType.FRUIT,
    description:
      "Jeruk manis lokal dengan kandungan vitamin C tinggi yang baik untuk kesehatan. Rasanya manis alami tanpa tambahan pemanis buatan.\n\nJeruk ini dipanen pada tingkat kematangan optimal sehingga memiliki rasa yang sempurna dan tekstur yang segar.",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 2,
      price: 12000,
      date: new Date("2024-01-16"),
    },
    supplier: {
      user_id: "user_2",
      user: {
        id: "user_2",
        name: "Sari Buah Nusantara",
      },
    },
  },
  {
    id: 3,
    name: "Apel Fuji",
    price_id: "price_3",
    supplier_id: "supplier_3",
    category: ProducType.FRUIT,
    description:
      "Apel Fuji premium dari kebun apel Malang dengan tekstur renyah dan rasa manis yang menyegarkan. Buah ini kaya akan serat dan antioksidan.\n\nDibudidayakan di dataran tinggi dengan iklim yang sejuk, menghasilkan apel dengan kualitas ekspor yang terjamin kesegarannya.",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 3,
      price: 25000,
      date: new Date("2024-01-17"),
    },
    supplier: {
      user_id: "user_3",
      user: {
        id: "user_3",
        name: "Kebun Apel Malang",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 4,
    name: "Pisang Cavendish",
    price_id: "price_4",
    supplier_id: "supplier_4",
    category: ProducType.FRUIT,
    description:
      "Pisang Cavendish segar dengan tingkat kematangan yang pas, cocok untuk dikonsumsi langsung atau diolah menjadi berbagai makanan dan minuman.\n\nKaya akan kalium dan vitamin B6, pisang ini sangat baik untuk kesehatan jantung dan sistem pencernaan.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 4,
      price: 8000,
      date: new Date("2024-01-18"),
    },
    supplier: {
      user_id: "user_4",
      user: {
        id: "user_4",
        name: "Petani Lokal Jawa",
      },
    },
  },
  {
    id: 5,
    name: "Mangga Harum Manis",
    price_id: "price_5",
    supplier_id: "supplier_5",
    category: ProducType.FRUIT,
    description:
      "Mangga Harum Manis dengan aroma yang harum dan rasa manis yang khas. Daging buahnya tebal, lembut, dan minim serat.\n\nDipetik pada tingkat kematangan optimal dan dikemas dengan hati-hati untuk menjaga kualitas hingga sampai ke tangan konsumen.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 5,
      price: 20000,
      date: new Date("2024-01-19"),
    },
    supplier: {
      user_id: "user_5",
      user: {
        id: "user_5",
        name: "Kebun Mangga Indramayu",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 6,
    name: "Strawberry Organik",
    price_id: "price_6",
    supplier_id: "supplier_6",
    category: ProducType.FRUIT,
    description:
      "Strawberry organik segar dari Lembang yang ditanam tanpa pestisida berbahaya. Rasanya manis dengan sedikit asam yang menyegarkan.\n\nDibudidayakan dengan metode organik menggunakan pupuk alami, menghasilkan buah yang aman dan bergizi tinggi.",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 6,
      price: 35000,
      date: new Date("2024-01-20"),
    },
    supplier: {
      user_id: "user_6",
      user: {
        id: "user_6",
        name: "Tani Organik Lembang",
      },
    },
  },
  {
    id: 7,
    name: "Anggur Hijau",
    price_id: "price_7",
    supplier_id: "supplier_7",
    category: ProducType.FRUIT,
    description:
      "Anggur hijau import segar dengan rasa manis dan tekstur yang renyah. Buah ini kaya akan antioksidan dan vitamin yang baik untuk kesehatan.\n\nDiimpor langsung dari kebun terbaik dan disimpan dalam kondisi suhu terkontrol untuk menjaga kesegaran optimal.",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 7,
      price: 45000,
      date: new Date("2024-01-21"),
    },
    supplier: {
      user_id: "user_7",
      user: {
        id: "user_7",
        name: "Import Fresh Fruit",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 8,
    name: "Nanas Madu",
    price_id: "price_8",
    supplier_id: "supplier_8",
    category: ProducType.FRUIT,
    description:
      "Nanas Madu dari Lampung dengan rasa yang sangat manis seperti madu dan aroma yang harum. Dagingnya berwarna kuning cerah dan tidak asam.\n\nDipanen pada tingkat kematangan sempurna dan langsung dikirim untuk memastikan kualitas dan kesegaran terbaik.",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 8,
      price: 18000,
      date: new Date("2024-01-22"),
    },
    supplier: {
      user_id: "user_8",
      user: {
        id: "user_8",
        name: "Petani Lampung",
      },
    },
  },
  {
    id: 9,
    name: "Pepaya California",
    price_id: "price_9",
    supplier_id: "supplier_9",
    category: ProducType.FRUIT,
    description:
      "Pepaya California dengan daging buah yang tebal, manis, dan berwarna orange cerah. Teksturnya lembut dan mudah dicerna.\n\nKaya akan vitamin A, C, dan enzim papain yang baik untuk pencernaan. Cocok untuk dikonsumsi langsung atau dijadikan jus.",
    image:
      "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 9,
      price: 10000,
      date: new Date("2024-01-23"),
    },
    supplier: {
      user_id: "user_9",
      user: {
        id: "user_9",
        name: "Tani Muda Indonesia",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 10,
    name: "Kiwi Import",
    price_id: "price_10",
    supplier_id: "supplier_10",
    category: ProducType.FRUIT,
    description:
      "Kiwi import premium dengan rasa asam manis yang menyegarkan dan tekstur yang unik. Kaya akan vitamin C, serat, dan antioksidan.\n\nDisimpan dalam kondisi cold storage untuk menjaga kesegaran dan kualitas. Cocok untuk dikonsumsi langsung atau dijadikan smoothie.",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 10,
      price: 55000,
      date: new Date("2024-01-24"),
    },
    supplier: {
      user_id: "user_10",
      user: {
        id: "user_10",
        name: "Premium Fruit Store",
      },
    },
  },
  {
    id: 11,
    name: "Alpukat Mentega",
    price_id: "price_11",
    supplier_id: "supplier_11",
    category: ProducType.FRUIT,
    description:
      "Alpukat mentega yang viral di media sosial dengan tekstur creamy seperti mentega dan rasa yang lembut. Cocok untuk dimakan langsung atau dijadikan jus.\n\nDipetik pada tingkat kematangan sempurna dan dikemas eksklusif. Buah ini menjadi trending karena teksturnya yang unik dan kandungan lemak sehat yang tinggi.",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 11,
      price: 45000,
      date: new Date("2024-01-25"),
    },
    supplier: {
      user_id: "user_11",
      user: {
        id: "user_11",
        name: "Kebun Alpukat Premium",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 12,
    name: "Durian Musang King",
    price_id: "price_12",
    supplier_id: "supplier_12",
    category: ProducType.FRUIT,
    description:
      "Durian Musang King premium yang viral karena rasa dan aromanya yang istimewa. Daging buahnya tebal, creamy, dan manis dengan aroma yang khas.\n\nImport langsung dari Malaysia dengan sertifikat kualitas. Durian ini menjadi viral karena kelezatan dan kualitas premium yang tidak tertandingi.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 12,
      price: 150000,
      date: new Date("2024-01-26"),
    },
    supplier: {
      user_id: "user_12",
      user: {
        id: "user_12",
        name: "Durian Sultan",
      },
    },
  },

  // ANIMAL PRODUCTS (including meat, seafood, dairy, and animal products)
  {
    id: 13,
    name: "Ayam Kampung",
    price_id: "price_13",
    supplier_id: "supplier_13",
    category: ProducType.ANIMAL,
    description:
      "Ayam kampung segar yang dipelihara secara tradisional dengan pakan alami. Dagingnya lebih padat dan memiliki cita rasa yang khas.\n\nDiproses dengan standar higienis dan langsung dikirim dalam kondisi segar untuk menjaga kualitas dan keamanan pangan.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 13,
      price: 35000,
      date: new Date("2024-01-27"),
    },
    supplier: {
      user_id: "user_13",
      user: {
        id: "user_13",
        name: "Peternakan Sari Ayam",
        image:
          "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 14,
    name: "Telur Ayam Kampung",
    price_id: "price_14",
    supplier_id: "supplier_14",
    category: ProducType.ANIMAL,
    description:
      "Telur ayam kampung segar dengan kuning telur yang lebih pekat dan bergizi tinggi. Ayam dipelihara bebas berkeliaran dengan pakan alami.\n\nDikemas dengan hati-hati dan dikirim dalam waktu maksimal 24 jam setelah ayam bertelur untuk menjaga kesegaran optimal.",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 14,
      price: 25000,
      date: new Date("2024-01-28"),
    },
    supplier: {
      user_id: "user_14",
      user: {
        id: "user_14",
        name: "Farm Fresh Eggs",
      },
    },
  },
  {
    id: 15,
    name: "Ikan Lele",
    price_id: "price_15",
    supplier_id: "supplier_15",
    category: ProducType.ANIMAL,
    description:
      "Ikan lele segar dari kolam budidaya dengan kualitas air terjaga. Dagingnya putih, lembut, dan kaya protein dengan kandungan lemak rendah.\n\nDipanen langsung dari kolam dan diproses dengan standar kebersihan tinggi. Cocok untuk berbagai olahan masakan tradisional maupun modern.",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 15,
      price: 18000,
      date: new Date("2024-01-29"),
    },
    supplier: {
      user_id: "user_15",
      user: {
        id: "user_15",
        name: "Kolam Lele Jaya",
        image:
          "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 16,
    name: "Daging Sapi",
    price_id: "price_16",
    supplier_id: "supplier_16",
    category: ProducType.ANIMAL,
    description:
      "Daging sapi segar premium dari sapi lokal yang dipelihara dengan pakan berkualitas. Tekstur dagingnya empuk dengan marbling yang baik.\n\nDiproses di rumah potong hewan berstandar halal dan higienis. Daging dipotong sesuai permintaan dan dikemas vakum untuk menjaga kesegaran.",
    image:
      "https://images.unsplash.com/photo-1588347818483-7bc538c4b011?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 16,
      price: 120000,
      date: new Date("2024-01-30"),
    },
    supplier: {
      user_id: "user_16",
      user: {
        id: "user_16",
        name: "Peternakan Maju Jaya",
      },
    },
  },
  {
    id: 17,
    name: "Susu Sapi Segar",
    price_id: "price_17",
    supplier_id: "supplier_17",
    category: ProducType.ANIMAL,
    description:
      "Susu sapi segar murni tanpa pengawet dari peternakan dengan standar kesehatan terjaga. Kaya akan protein, kalsium, dan vitamin.\n\nSapi dipelihara di lingkungan yang bersih dengan pakan berkualitas. Susu diperah langsung dan dikemas dalam kemasan steril untuk konsumsi langsung.",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 17,
      price: 15000,
      date: new Date("2024-01-31"),
    },
    supplier: {
      user_id: "user_17",
      user: {
        id: "user_17",
        name: "Peternakan Sumber Rejeki",
        image:
          "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 18,
    name: "Ikan Nila",
    price_id: "price_18",
    supplier_id: "supplier_18",
    category: ProducType.ANIMAL,
    description:
      "Ikan nila segar dari tambak air tawar dengan sistem budidaya modern. Dagingnya putih, tidak amis, dan memiliki tekstur yang lembut.\n\nDibudidayakan dengan pakan alami dan tanpa antibiotik berbahaya. Dipanen pada ukuran optimal dan langsung diproses untuk menjaga kesegaran.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 18,
      price: 22000,
      date: new Date("2024-02-01"),
    },
    supplier: {
      user_id: "user_18",
      user: {
        id: "user_18",
        name: "Tambak Nila Sejahtera",
      },
    },
  },
  {
    id: 19,
    name: "Kambing",
    price_id: "price_19",
    supplier_id: "supplier_19",
    category: ProducType.ANIMAL,
    description:
      "Daging kambing segar dari kambing lokal yang dipelihara dengan pakan hijauan alami. Dagingnya rendah kolesterol dan kaya protein.\n\nDiproses di tempat pemotongan berstandar halal dengan sistem cold chain untuk menjaga kualitas. Cocok untuk berbagai olahan seperti gulai, sate, dan tongseng.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 19,
      price: 85000,
      date: new Date("2024-02-02"),
    },
    supplier: {
      user_id: "user_19",
      user: {
        id: "user_19",
        name: "Peternakan Kambing Bogor",
        image:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      },
    },
  },
  {
    id: 20,
    name: "Udang Vaname",
    price_id: "price_20",
    supplier_id: "supplier_20",
    category: ProducType.ANIMAL,
    description:
      "Udang vaname segar dari tambak dengan teknologi bioflok yang ramah lingkungan. Udangnya besar, daging kenyal, dan rasa manis alami.\n\nDibudidayakan tanpa antibiotik dengan kontrol kualitas air yang ketat. Dipanen dan langsung dibekukan untuk menjaga kesegaran hingga sampai konsumen.",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=200&h=200&fit=crop&crop=center",
    price: {
      id: 20,
      price: 65000,
      date: new Date("2024-02-03"),
    },
    supplier: {
      user_id: "user_20",
      user: {
        id: "user_20",
        name: "Tambak Udang Modern",
      },
    },
  },
];

// Utility functions for filtering products
export const filterProducts = (options: ProductFilterOptions): Product[] => {
  let filtered = [...allProducts];

  if (options.category) {
    filtered = filtered.filter(
      (product) => product.category === options.category
    );
  }

  if (options.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
};

// Specific filter functions
export const getFruitProducts = (limit?: number): Product[] =>
  filterProducts({ category: ProducType.FRUIT, limit });

export const getAnimalProducts = (limit?: number): Product[] =>
  filterProducts({ category: ProducType.ANIMAL, limit });

export const getAllProducts = (): Product[] => allProducts;
