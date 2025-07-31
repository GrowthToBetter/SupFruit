import {
  Product,
  ProductCategory,
  ProductFilterOptions,
} from "@/components/toko/types";

// Unified product data with categories and purchase counts
export const allProducts: Product[] = [
  // FRUIT PRODUCTS
  {
    id: 1,
    name: "Lemon California",
    price: "Rp15.000 / kg",
    supplier: "Ryo Haryanto Anggayni",
    category: ProductCategory.FRUIT,
    purchaseCount: 245,
    description:
      "Lemon California adalah lemon segar berkualitas tinggi yang cocok untuk berbagai keperluan masakan dan minuman. Buah ini memiliki rasa asam yang segar dan aroma yang khas.\n\nDipetik langsung dari kebun dengan standar kualitas terbaik, lemon ini cocok untuk membuat jus, bumbu masakan, atau sebagai garnish minuman.",
    image:
      "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Malang, Jawa Timur",
      cost: "Gratis ongkir minimal pembelian Rp50.000",
    },
  },
  {
    id: 2,
    name: "Jeruk Manis",
    price: "Rp12.000 / kg",
    supplier: "Sari Buah Nusantara",
    category: ProductCategory.FRUIT,
    purchaseCount: 189,
    description:
      "Jeruk manis lokal dengan kandungan vitamin C tinggi yang baik untuk kesehatan. Rasanya manis alami tanpa tambahan pemanis buatan.\n\nJeruk ini dipanen pada tingkat kematangan optimal sehingga memiliki rasa yang sempurna dan tekstur yang segar.",
    image:
      "https://images.unsplash.com/photo-1547514701-42782101795e?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Pontianak, Kalimantan Barat",
      cost: "Ongkir Rp15.000 (Jabodetabek)",
    },
  },
  {
    id: 3,
    name: "Apel Fuji",
    price: "Rp25.000 / kg",
    supplier: "Kebun Apel Malang",
    category: ProductCategory.FRUIT,
    purchaseCount: 312,
    description:
      "Apel Fuji premium dari kebun apel Malang dengan tekstur renyah dan rasa manis yang menyegarkan. Buah ini kaya akan serat dan antioksidan.\n\nDibudidayakan di dataran tinggi dengan iklim yang sejuk, menghasilkan apel dengan kualitas ekspor yang terjamin kesegarannya.",
    image:
      "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Malang, Jawa Timur",
      cost: "Gratis ongkir minimal pembelian Rp75.000",
    },
  },
  {
    id: 4,
    name: "Pisang Cavendish",
    price: "Rp8.000 / kg",
    supplier: "Petani Lokal Jawa",
    category: ProductCategory.FRUIT,
    purchaseCount: 567,
    description:
      "Pisang Cavendish segar dengan tingkat kematangan yang pas, cocok untuk dikonsumsi langsung atau diolah menjadi berbagai makanan dan minuman.\n\nKaya akan kalium dan vitamin B6, pisang ini sangat baik untuk kesehatan jantung dan sistem pencernaan.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Lampung",
      cost: "Ongkir Rp12.000 (Jabodetabek)",
    },
  },
  {
    id: 5,
    name: "Mangga Harum Manis",
    price: "Rp20.000 / kg",
    supplier: "Kebun Mangga Indramayu",
    category: ProductCategory.FRUIT,
    purchaseCount: 423,
    description:
      "Mangga Harum Manis dengan aroma yang harum dan rasa manis yang khas. Daging buahnya tebal, lembut, dan minim serat.\n\nDipetik pada tingkat kematangan optimal dan dikemas dengan hati-hati untuk menjaga kualitas hingga sampai ke tangan konsumen.",
    image:
      "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Indramayu, Jawa Barat",
      cost: "Ongkir Rp18.000 (Jabodetabek)",
    },
  },
  {
    id: 6,
    name: "Strawberry Organik",
    price: "Rp35.000 / kg",
    supplier: "Tani Organik Lembang",
    category: ProductCategory.FRUIT,
    purchaseCount: 298,
    description:
      "Strawberry organik segar dari Lembang yang ditanam tanpa pestisida berbahaya. Rasanya manis dengan sedikit asam yang menyegarkan.\n\nDibudidayakan dengan metode organik menggunakan pupuk alami, menghasilkan buah yang aman dan bergizi tinggi.",
    image:
      "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Lembang, Jawa Barat",
      cost: "Gratis ongkir minimal pembelian Rp100.000",
    },
  },
  {
    id: 7,
    name: "Anggur Hijau",
    price: "Rp45.000 / kg",
    supplier: "Import Fresh Fruit",
    category: ProductCategory.FRUIT,
    purchaseCount: 156,
    description:
      "Anggur hijau import segar dengan rasa manis dan tekstur yang renyah. Buah ini kaya akan antioksidan dan vitamin yang baik untuk kesehatan.\n\nDiimpor langsung dari kebun terbaik dan disimpan dalam kondisi suhu terkontrol untuk menjaga kesegaran optimal.",
    image:
      "https://images.unsplash.com/photo-1537640538966-79f369143f8f?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Jakarta",
      cost: "Ongkir Rp25.000 (Jabodetabek)",
    },
  },
  {
    id: 8,
    name: "Nanas Madu",
    price: "Rp18.000 / kg",
    supplier: "Petani Lampung",
    category: ProductCategory.FRUIT,
    purchaseCount: 389,
    description:
      "Nanas Madu dari Lampung dengan rasa yang sangat manis seperti madu dan aroma yang harum. Dagingnya berwarna kuning cerah dan tidak asam.\n\nDipanen pada tingkat kematangan sempurna dan langsung dikirim untuk memastikan kualitas dan kesegaran terbaik.",
    image:
      "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Lampung",
      cost: "Ongkir Rp20.000 (Jabodetabek)",
    },
  },
  {
    id: 9,
    name: "Pepaya California",
    price: "Rp10.000 / kg",
    supplier: "Tani Muda Indonesia",
    category: ProductCategory.FRUIT,
    purchaseCount: 278,
    description:
      "Pepaya California dengan daging buah yang tebal, manis, dan berwarna orange cerah. Teksturnya lembut dan mudah dicerna.\n\nKaya akan vitamin A, C, dan enzim papain yang baik untuk pencernaan. Cocok untuk dikonsumsi langsung atau dijadikan jus.",
    image:
      "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Bogor, Jawa Barat",
      cost: "Ongkir Rp10.000 (Jabodetabek)",
    },
  },
  {
    id: 10,
    name: "Kiwi Import",
    price: "Rp55.000 / kg",
    supplier: "Premium Fruit Store",
    category: ProductCategory.FRUIT,
    purchaseCount: 134,
    description:
      "Kiwi import premium dengan rasa asam manis yang menyegarkan dan tekstur yang unik. Kaya akan vitamin C, serat, dan antioksidan.\n\nDisimpan dalam kondisi cold storage untuk menjaga kesegaran dan kualitas. Cocok untuk dikonsumsi langsung atau dijadikan smoothie.",
    image:
      "https://images.unsplash.com/photo-1585059895524-72359e06133a?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Jakarta",
      cost: "Gratis ongkir minimal pembelian Rp150.000",
    },
  },
  {
    id: 11,
    name: "Alpukat Mentega",
    price: "Rp45.000 / kg",
    supplier: "Kebun Alpukat Premium",
    category: ProductCategory.FRUIT,
    purchaseCount: 689,
    description:
      "Alpukat mentega yang viral di media sosial dengan tekstur creamy seperti mentega dan rasa yang lembut. Cocok untuk dimakan langsung atau dijadikan jus.\n\nDipetik pada tingkat kematangan sempurna dan dikemas eksklusif. Buah ini menjadi trending karena teksturnya yang unik dan kandungan lemak sehat yang tinggi.",
    image:
      "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=200&h=200&fit=crop&crop&crop=center",
    shipping: {
      location: "Dikirim dari Purwokerto, Jawa Tengah",
      cost: "Gratis ongkir minimal pembelian Rp100.000",
    },
  },
  {
    id: 12,
    name: "Durian Musang King",
    price: "Rp150.000 / kg",
    supplier: "Durian Sultan",
    category: ProductCategory.FRUIT,
    purchaseCount: 512,
    description:
      "Durian Musang King premium yang viral karena rasa dan aromanya yang istimewa. Daging buahnya tebal, creamy, dan manis dengan aroma yang khas.\n\nImport langsung dari Malaysia dengan sertifikat kualitas. Durian ini menjadi viral karena kelezatan dan kualitas premium yang tidak tertandingi.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Jakarta",
      cost: "Gratis ongkir minimal pembelian Rp300.000",
    },
  },

  // ANIMAL PRODUCTS
  {
    id: 13,
    name: "Ayam Kampung",
    price: "Rp35.000 / kg",
    supplier: "Peternakan Sari Ayam",
    category: ProductCategory.MEAT,
    purchaseCount: 445,
    description:
      "Ayam kampung segar yang dipelihara secara tradisional dengan pakan alami. Dagingnya lebih padat dan memiliki cita rasa yang khas.\n\nDiproses dengan standar higienis dan langsung dikirim dalam kondisi segar untuk menjaga kualitas dan keamanan pangan.",
    image:
      "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Bogor, Jawa Barat",
      cost: "Ongkir Rp15.000 (same day delivery)",
    },
  },
  {
    id: 14,
    name: "Telur Ayam Kampung",
    price: "Rp25.000 / kg",
    supplier: "Farm Fresh Eggs",
    category: ProductCategory.ANIMAL,
    purchaseCount: 623,
    description:
      "Telur ayam kampung segar dengan kuning telur yang lebih pekat dan bergizi tinggi. Ayam dipelihara bebas berkeliaran dengan pakan alami.\n\nDikemas dengan hati-hati dan dikirim dalam waktu maksimal 24 jam setelah ayam bertelur untuk menjaga kesegaran optimal.",
    image:
      "https://images.unsplash.com/photo-1582722872445-44dc5f7e3c8f?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Sukabumi, Jawa Barat",
      cost: "Ongkir Rp12.000 (Jabodetabek)",
    },
  },
  {
    id: 15,
    name: "Ikan Lele",
    price: "Rp18.000 / kg",
    supplier: "Kolam Lele Jaya",
    category: ProductCategory.SEAFOOD,
    purchaseCount: 356,
    description:
      "Ikan lele segar dari kolam budidaya dengan kualitas air terjaga. Dagingnya putih, lembut, dan kaya protein dengan kandungan lemak rendah.\n\nDipanen langsung dari kolam dan diproses dengan standar kebersihan tinggi. Cocok untuk berbagai olahan masakan tradisional maupun modern.",
    image:
      "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Depok, Jawa Barat",
      cost: "Ongkir Rp10.000 (same day delivery)",
    },
  },
  {
    id: 16,
    name: "Daging Sapi",
    price: "Rp120.000 / kg",
    supplier: "Peternakan Maju Jaya",
    category: ProductCategory.MEAT,
    purchaseCount: 289,
    description:
      "Daging sapi segar premium dari sapi lokal yang dipelihara dengan pakan berkualitas. Tekstur dagingnya empuk dengan marbling yang baik.\n\nDiproses di rumah potong hewan berstandar halal dan higienis. Daging dipotong sesuai permintaan dan dikemas vakum untuk menjaga kesegaran.",
    image:
      "https://images.unsplash.com/photo-1588347818483-7bc538c4b011?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Bandung, Jawa Barat",
      cost: "Gratis ongkir minimal pembelian Rp200.000",
    },
  },
  {
    id: 17,
    name: "Susu Sapi Segar",
    price: "Rp15.000 / liter",
    supplier: "Peternakan Sumber Rejeki",
    category: ProductCategory.DAIRY,
    purchaseCount: 734,
    description:
      "Susu sapi segar murni tanpa pengawet dari peternakan dengan standar kesehatan terjaga. Kaya akan protein, kalsium, dan vitamin.\n\nSapi dipelihara di lingkungan yang bersih dengan pakan berkualitas. Susu diperah langsung dan dikemas dalam kemasan steril untuk konsumsi langsung.",
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Lembang, Jawa Barat",
      cost: "Ongkir Rp8.000 (same day delivery)",
    },
  },
  {
    id: 18,
    name: "Ikan Nila",
    price: "Rp22.000 / kg",
    supplier: "Tambak Nila Sejahtera",
    category: ProductCategory.SEAFOOD,
    purchaseCount: 267,
    description:
      "Ikan nila segar dari tambak air tawar dengan sistem budidaya modern. Dagingnya putih, tidak amis, dan memiliki tekstur yang lembut.\n\nDibudidayakan dengan pakan alami dan tanpa antibiotik berbahaya. Dipanen pada ukuran optimal dan langsung diproses untuk menjaga kesegaran.",
    image:
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Cianjur, Jawa Barat",
      cost: "Ongkir Rp15.000 (Jabodetabek)",
    },
  },
  {
    id: 19,
    name: "Kambing",
    price: "Rp85.000 / kg",
    supplier: "Peternakan Kambing Bogor",
    category: ProductCategory.MEAT,
    purchaseCount: 198,
    description:
      "Daging kambing segar dari kambing lokal yang dipelihara dengan pakan hijauan alami. Dagingnya rendah kolesterol dan kaya protein.\n\nDiproses di tempat pemotongan berstandar halal dengan sistem cold chain untuk menjaga kualitas. Cocok untuk berbagai olahan seperti gulai, sate, dan tongseng.",
    image:
      "https://images.unsplash.com/photo-1516467508483-a7212febe31a?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Bogor, Jawa Barat",
      cost: "Ongkir Rp20.000 (same day delivery)",
    },
  },
  {
    id: 20,
    name: "Udang Vaname",
    price: "Rp65.000 / kg",
    supplier: "Tambak Udang Modern",
    category: ProductCategory.SEAFOOD,
    purchaseCount: 456,
    description:
      "Udang vaname segar dari tambak dengan teknologi bioflok yang ramah lingkungan. Udangnya besar, daging kenyal, dan rasa manis alami.\n\nDibudidayakan tanpa antibiotik dengan kontrol kualitas air yang ketat. Dipanen dan langsung dibekukan untuk menjaga kesegaran hingga sampai konsumen.",
    image:
      "https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?w=200&h=200&fit=crop&crop=center",
    shipping: {
      location: "Dikirim dari Situbondo, Jawa Timur",
      cost: "Ongkir Rp25.000 (dengan dry ice)",
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

  if (options.minPurchaseCount) {
    filtered = filtered.filter(
      (product) => product.purchaseCount >= (options.minPurchaseCount ?? 0)
    );
  }

  // Sort by purchase count for viral products
  if (options.minPurchaseCount) {
    filtered = filtered.sort((a, b) => b.purchaseCount - a.purchaseCount);
  }

  if (options.limit) {
    filtered = filtered.slice(0, options.limit);
  }

  return filtered;
};

// Specific filter functions
export const getFruitProducts = (limit?: number): Product[] =>
  filterProducts({ category: ProductCategory.FRUIT, limit });

export const getAnimalProducts = (limit?: number): Product[] =>
  filterProducts({
    category: ProductCategory.ANIMAL,
    limit,
  })
    .concat(
      filterProducts({
        category: ProductCategory.MEAT,
        limit: limit ? Math.floor(limit / 2) : undefined,
      })
    )
    .concat(
      filterProducts({
        category: ProductCategory.SEAFOOD,
        limit: limit ? Math.floor(limit / 2) : undefined,
      })
    )
    .concat(
      filterProducts({
        category: ProductCategory.DAIRY,
        limit: limit ? Math.floor(limit / 2) : undefined,
      })
    );

export const getViralProducts = (limit: number = 8): Product[] =>
  filterProducts({ minPurchaseCount: 400, limit });

export const getAllProducts = (): Product[] => allProducts;
