const products = [
  {
    id: 1,
    name: "Sony WH-1000XM5 Wireless Headphones",
    category: "Electronics",
    price: 349.99,
    stock: 50,
    description:
      "Industry-leading noise-cancelling headphones with 30-hour battery life",
    image: "https://www.sony.com/image/sonymdr1000xm5blackfront.jpg",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Nike Air Zoom Pegasus 39 Running Shoes",
    category: "Footwear",
    price: 129.95,
    stock: 100,
    description: "Lightweight running shoes with responsive cushioning",
    image:
      "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/pegasus39.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "Spigen Ultra Hybrid iPhone 14 Case",
    category: "Accessories",
    price: 24.99,
    stock: 200,
    description: "Clear, durable case with shock-absorbing TPU bumper",
    image: "https://spigen.com/images/iphone14-ultra-hybrid.jpg",
    rating: 4.3,
  },
  {
    id: 4,
    name: "Samsonite Tectonic Laptop Backpack",
    category: "Bags",
    price: 89.99,
    stock: 30,
    description:
      "Water-resistant backpack with padded 15.6-inch laptop compartment",
    image: "https://www.samsonite.com/images/tectonic-backpack.jpg",
    rating: 4.6,
  },
  {
    id: 5,
    name: "Apple AirPods Pro 2",
    category: "Electronics",
    price: 249.99,
    stock: 75,
    description:
      "Wireless earbuds with active noise cancellation and spatial audio",
    image:
      "https://www.apple.com/v/airpods-pro/f/images/overview/airpods_pro__e6b905vp4d6q_large.jpg",
    rating: 4.7,
  },
  {
    id: 6,
    name: "Adidas Ultraboost 22 Sneakers",
    category: "Footwear",
    price: 189.99,
    stock: 80,
    description:
      "High-performance running shoes with responsive Boost cushioning",
    image: "https://assets.adidas.com/images/ultraboost22.jpg",
    rating: 4.4,
  },
  {
    id: 7,
    name: "Anker PowerCore 10000 Portable Charger",
    category: "Accessories",
    price: 29.99,
    stock: 150,
    description: "Ultra-compact 10000mAh power bank with fast charging",
    image: "https://www.anker.com/images/powercore10000.jpg",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Herschel Little America Backpack",
    category: "Bags",
    price: 119.99,
    stock: 40,
    description:
      "Stylish backpack with padded laptop sleeve and durable fabric",
    image: "https://herschel.com/images/little-america-backpack.jpg",
    rating: 4.6,
  },
  {
    id: 9,
    name: "Levi’s 501 Original Fit Jeans",
    category: "Clothing",
    price: 69.99,
    stock: 120,
    description: "Classic straight-fit jeans with durable denim construction",
    image: "https://www.levi.com/images/501-original-fit-jeans.jpg",
    rating: 4.3,
  },
  {
    id: 10,
    name: "Dyson V15 Detect Cordless Vacuum",
    category: "Home",
    price: 699.99,
    stock: 20,
    description:
      "Powerful cordless vacuum with laser dust detection and HEPA filtration",
    image: "https://www.dyson.com/images/v15-detect.jpg",
    rating: 4.9,
  },
  {
    id: 11,
    name: "Ray-Ban Classic Wayfarer Sunglasses",
    category: "Accessories",
    price: 159.99,
    stock: 60,
    description: "Timeless sunglasses with polarized lenses and durable frame",
    image: "https://www.ray-ban.com/images/wayfarer-classic.jpg",
    rating: 4.7,
  },
  {
    id: 12,
    name: "Under Armour HeatGear Compression Shirt",
    category: "Clothing",
    price: 34.99,
    stock: 90,
    description: "Breathable compression shirt for athletic performance",
    image: "https://www.underarmour.com/images/heatgear-shirt.jpg",
    rating: 4.4,
  },
];

// DISTINCT CATEGORIES

const demo = document.getElementById("demo");

const categories = [...new Set(products.map((item) => item.category))];
const htmLOutput = categories
  .map((item) => `<button class='categories' id="${item}">${item}</button>`)
  .join("");

demo.innerHTML = htmLOutput;

const showCategories = document.getElementsByClassName("categories");
Array.from(showCategories).forEach((button) => {
  button.addEventListener("click", function () {
    Array.from(showCategories).forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    const category = this.id;
    const categoryItems = products.filter((item) => item.category === category);
    categoryItems.forEach((item) =>
      console.log(item.name, item.stock, item.price)
    );
  });
});
