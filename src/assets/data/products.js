// fake product data
// phone
export const IPHONE_16_PRO = {
  id: 1,
  name: "iPhone 16 Pro",
  title: "The Ultimate iPhone",
  image: "http://152.136.182.210:12231/images/phones/compare_iphone-16-pro.png",
  carouselImages: [
    "http://152.136.182.210:12231/images/phones/carousel_1.webp",
    "http://152.136.182.210:12231/images/phones/carousel_2.webp",
  ],
  startingPrice: 7999.0,
  installments: 250.0,
  models: [
    {
      id: 1,
      name: "iPhone 16 Pro",
      specification: "6.3-inch display",
      price: 7999.0,
    },
    {
      id: 2,
      name: "iPhone 16 Pro Max",
      specification: "6.3-inch display",
      price: 7999.0,
    },
  ],
  colors: [
    "Desert Titanium",
    "Natural Titanium",
    "White Titanium",
    "Black Titanium",
  ],
  memorySizes: [
    { id: 1, name: "128GB", price: 0.0 },
    { id: 2, name: "256GB", price: 2000.0 },
    { id: 3, name: "512GB", price: 4000.0 },
    { id: 4, name: "1TB", price: 6000.0 },
  ],
  features: [
    "A18 Pro chip with 6-core GPU",
    "Camera Control",
    "Pro camera system",
    "Our most advanced 48MP Fusion camera",
    "5x telephoto camera",
    "48MP Ultra Wide camera",
    "Up to 33 hours of video playback",
  ],
  inStock: true,
  productCategoryId: 1,
  category: "Phone",
};

export const IPHONE_16 = {
  id: 2,
  name: "iPhone 16",
  title: "Serious power, straightforward",
  image: "images/phones/compare_iphone-16.png",
  carouselImages: [
    "images/phones/carousel_1.webp",
    "images/phones/carousel_2.webp",
  ],
  startingPrice: 5999,
  installments: 250,
  models: [
    { id: 2, name: "iPhone 16", spec: "6.1-inch display", price: 5999 },
    { id: 3, name: "iPhone 16 Plus", spec: "6.7-inch display", price: 6999 },
  ],
  colors: [
    "Desert Titanium",
    "Natural Titanium",
    "White Titanium",
    "Black Titanium",
  ],
  memorySizes: [
    {
      name: "128GB",
      price: 0,
    },
    {
      name: "256GB",
      price: 2000,
    },
    {
      name: "512GB",
      price: 4000,
    },
  ],
  features: [
    "A18 chip with 5-core GPU",
    "Camera Control",
    "Advanced dual-camera system",
    "48MP Fusion camera",
    "2x telephoto capability",
    "12MP Ultra Wide camera",
    "Up to 27 hours of video playback",
  ],
  inStock: true,
  category: "Phone",
};

export const IPHONE_15 = {
  id: 3,
  name: "iPhone 15",
  title: "Vibrant in every way",
  image: "images/phones/compare_iphone-15.png",
  carouselImages: [
    "images/phones/carousel_1.webp",
    "images/phones/carousel_2.webp",
  ],
  startingPrice: 5399,
  installments: 225,
  models: [
    { id: 2, name: "iPhone 15", spec: "6.1-inch display", price: 5399 },
    { id: 3, name: "iPhone 15 Plus", spec: "6.7-inch display", price: 5999 },
  ],
  colors: [
    "Desert Titanium",
    "Natural Titanium",
    "White Titanium",
    "Black Titanium",
  ],
  memorySizes: [
    {
      name: "128GB",
      price: 0,
    },
    {
      name: "256GB",
      price: 2000,
    },
    {
      name: "512GB",
      price: 4000,
    },
  ],
  features: [
    "A16 chip with 5-core GPU",
    "-",
    "Dual-camera system",
    "48MP Fusion camera",
    "2x telephoto capability",
    "12MP Ultra Wide camera",
    "Up to 26 hours of video playback",
  ],
  inStock: false,
  category: "Phone",
};

export const IPHONE_14 = {
  id: 4,
  name: "iPhone 14",
  title: "Full of highlights",
  image: "images/phones/compare_iphone_14.png",
  carouselImages: [
    "images/phones/carousel_1.webp",
    "images/phones/carousel_2.webp",
  ],
  startingPrice: 4699,
  installments: 196,
  models: [
    { id: 2, name: "iPhone 14", spec: "6.1-inch display", price: 5399 },
    { id: 3, name: "iPhone 14 Plus", spec: "6.7-inch display", price: 5999 },
  ],
  colors: [
    "Desert Titanium",
    "Natural Titanium",
    "White Titanium",
    "Black Titanium",
  ],
  memorySizes: [
    {
      name: "128GB",
      price: 0,
    },
    {
      name: "256GB",
      price: 2000,
    },
    {
      name: "512GB",
      price: 4000,
    },
  ],
  features: [
    "A15 Bionic chip with 5-core GPU",
    "-",
    "Dual-camera system",
    "12MP main camera",
    "-",
    "12MP Ultra Wide camera",
    "Up to 26 hours of video playback",
  ],
  inStock: true,
  category: "Phone",
};

export const IPHONE_SE = {
  id: 5,
  name: "iPhone SE",
  title: "Powerful and affordable",
  image: "images/phones/compare_iphone-se.png",
  carouselImages: [
    "images/phones/carousel_1.webp",
    "images/phones/carousel_2.webp",
  ],
  startingPrice: 3499,
  installments: 146,
  models: [{ id: 2, name: "iPhone SE", spec: "5.7-inch display", price: 3499 }],
  colors: [
    "Desert Titanium",
    "Natural Titanium",
    "White Titanium",
    "Black Titanium",
  ],
  memorySizes: [
    {
      name: "64GB",
      price: 0,
    },
    {
      name: "128GB",
      price: 500,
    },
    {
      name: "256GB",
      price: 1000,
    },
  ],
  features: [
    "A15 Bionic chip with 4-core GPU",
    "-",
    "Single camera system",
    "12MP main camera",
    "-",
    "-",
    "Up to 15 hours of video playback",
  ],
  inStock: true,
  category: "Phone",
};

// mac
export const MacBook_Air = {
  id: 6,
  name: "MacBook Air",
  title: "Ultraportable, endlessly capable",
  image: "images/mac/compare_mba.png",
  carouselImages: ["images/mac/carousel_1.webp", "images/mac/carousel_2.webp"],
  startingPrice: 7999,
  installments: 333,
  models: [
    {
      id: 7,
      name: "M1 Pro Model",
      spec: "8-core CPU / 8-core GPU",
      price: 7999,
    },
    {
      id: 8,
      name: "M1 Max Model",
      spec: "10-core CPU / 32-core GPU",
      price: 9999,
    },
  ],
  colors: ["Space Gray", "Silver", "Gold"],
  memorySizes: [
    { name: "36GB", price: 0 },
    { name: "64GB", price: 2000 },
    { name: "128GB", price: 4000 },
  ],
  features: [
    "Retina display",
    "Up to 18 hours of battery life",
    "Magic Keyboard",
    "Touch ID",
    "Thunderbolt 4 port",
  ],
  inStock: true,
  category: "Laptop",
};

export const MacBook_Pro_16 = {
  id: 4,
  name: "MacBook Pro 16",
  title: "Unstoppable performance",
  image: "images/mac/compare_mbp.png",
  carouselImages: ["images/mac/carousel_1.webp", "images/mac/carousel_2.webp"],
  startingPrice: 19999,
  installments: 833,
  models: [
    {
      id: 5,
      name: "M3 Pro Model",
      spec: "12-core CPU / 18-core GPU",
      price: 19999,
    },
    {
      id: 6,
      name: "M3 Max Model",
      spec: "16-core CPU / 40-core GPU",
      price: 27999,
    },
  ],
  colors: ["Space Black", "Silver"],
  memorySizes: [
    { name: "36GB", price: 0 },
    { name: "64GB", price: 3000 },
    { name: "128GB", price: 8000 },
  ],
  features: [
    "Liquid Retina XDR display",
    "Up to 22 hours of battery life",
    "Six-speaker sound system",
    "3 Thunderbolt 4 ports",
    "MagSafe 3 charging",
  ],
  inStock: true,
  category: "Laptop",
};

export const iMac = {
  id: 5,
  name: "iMac",
  title: "Vibrant, all-in-one powerhouse",
  image: "images/mac/compare_imac.png",
  carouselImages: ["images/mac/carousel_1.webp", "images/mac/carousel_2.webp"],
  startingPrice: 7999,
  installments: 333,
  models: [
    {
      id: 6,
      name: "M1 Pro Model",
      spec: "8-core CPU / 8-core GPU",
      price: 7999,
    },
    {
      id: 7,
      name: "M1 Max Model",
      spec: "10-core CPU / 32-core GPU",
      price: 9999,
    },
  ],
  colors: ["Blue", "Green", "Pink", "Silver", "Yellow", "Orange"],
  memorySizes: [
    { name: "36GB", price: 0 },
    { name: "64GB", price: 2000 },
    { name: "128GB", price: 4000 },
  ],
  features: [
    "4.5K Retina display",
    "Up to 18 hours of battery life",
    "Magic Keyboard",
    "Touch ID",
    "Thunderbolt 4 port",
  ],
  inStock: true,
  category: "Desktop",
};

// iPad
export const iPad_Pro = {
  id: 9,
  name: "iPad Pro M3",
  title: "Limitless capability",
  image: "images/ipad/compare_ipad_pro.png",
  carouselImages: [
    "images/ipad/carousel_1.webp",
    "images/ipad/carousel_2.webp",
  ],
  startingPrice: 7999,
  installments: 333,
  models: [
    {
      id: 12,
      name: "M3 Pro Model",
      spec: "12.9-inch Liquid Retina XDR display",
      price: 7999,
    },
    {
      id: 13,
      name: "M3 Max Model",
      spec: "11-inch Liquid Retina XDR display",
      price: 6999,
    },
  ],
  colors: ["Space Black", "Silver"],
  memorySizes: [
    { name: "128GB", price: 0 },
    { name: "256GB", price: 2000 },
    { name: "512GB", price: 4000 },
    { name: "1TB", price: 6000 },
  ],
  features: [
    "M1 Pro chip",
    "Up to 10 hours of battery life",
    "Thunderbolt 4 port",
    "Face ID",
    "USB-C charging",
  ],
  inStock: true,
  category: "Tablet",
};

export const iPad_Air = {
  id: 10,
  name: "iPad Air M3",
  title: "Lightweight, endlessly capable",
  image: "images/ipad/compare_ipad_air.png",
  carouselImages: [
    "images/ipad/carousel_1.webp",
    "images/ipad/carousel_2.webp",
  ],
  startingPrice: 4999,
  installments: 208,
  models: [
    {
      id: 14,
      name: "M3 Pro Model",
      spec: "12.9-inch Liquid Retina XDR display",
      price: 4999,
    },
    {
      id: 15,
      name: "M3 Max Model",
      spec: "11-inch Liquid Retina XDR display",
      price: 3999,
    },
  ],
  colors: ["Space Black", "Silver"],
  memorySizes: [
    { name: "128GB", price: 0 },
    { name: "256GB", price: 2000 },
    { name: "512GB", price: 4000 },
    { name: "1TB", price: 6000 },
  ],
  features: [
    "M1 Pro chip",
    "Up to 10 hours of battery life",
    "Thunderbolt 4 port",
    "Face ID",
    "USB-C charging",
  ],
  inStock: true,
  category: "Tablet",
};

export const iPad = {
  id: 11,
  name: "iPad M3",
  title: "Lightweight, endlessly capable",
  image: "images/ipad/compare_ipad.png",
  carouselImages: [
    "images/ipad/carousel_1.webp",
    "images/ipad/carousel_2.webp",
  ],
  startingPrice: 2999,
  installments: 125,
  models: [
    {
      id: 16,
      name: "M3 Pro Model",
      spec: "12.9-inch Liquid Retina XDR display",
      price: 2999,
    },
    {
      id: 17,
      name: "M3 Max Model",
      spec: "11-inch Liquid Retina XDR display",
      price: 1999,
    },
  ],
  colors: ["Space Black", "Silver"],
  memorySizes: [
    { name: "128GB", price: 0 },
    { name: "256GB", price: 2000 },
    { name: "512GB", price: 4000 },
    { name: "1TB", price: 6000 },
  ],
  features: [
    "M1 Pro chip",
    "Up to 10 hours of battery life",
    "Thunderbolt 4 port",
    "Face ID",
    "USB-C charging",
  ],
  inStock: true,
  category: "Tablet",
};

export const ipad_mini = {
  id: 12,
  name: "iPad Mini M3",
  title: "Lightweight, endlessly capable",
  image: "images/ipad/compare_ipad_mini.png",
  carouselImages: [
    "images/ipad/carousel_1.webp",
    "images/ipad/carousel_2.webp",
  ],
  startingPrice: 3999,
  installments: 167,
  models: [
    {
      id: 18,
      name: "M3 Pro Model",
      spec: "12.9-inch Liquid Retina XDR display",
      price: 3999,
    },
    {
      id: 19,
      name: "M3 Max Model",
      spec: "11-inch Liquid Retina XDR display",
      price: 2999,
    },
  ],
  colors: ["Space Black", "Silver"],
  memorySizes: [
    { name: "128GB", price: 0 },
    { name: "256GB", price: 2000 },
    { name: "512GB", price: 4000 },
    { name: "1TB", price: 6000 },
  ],
  features: [
    "M1 Pro chip",
    "Up to 10 hours of battery life",
    "Thunderbolt 4 port",
    "Face ID",
    "USB-C charging",
  ],
  inStock: true,
  category: "Tablet",
};

// export all products
export const product_list = [
  IPHONE_16_PRO,
  IPHONE_16,
  IPHONE_15,
  IPHONE_14,
  IPHONE_SE,
  MacBook_Air,
  MacBook_Pro_16,
  iMac,
  iPad_Pro,
  iPad_Air,
  iPad,
  ipad_mini,
];
