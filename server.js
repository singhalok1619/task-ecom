const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Define your API endpoint(s) here
app.get("/api/data", (req, res) => {
  // Replace the following data with your own data

  const data = {
    products: [
      {
        id: 1,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 2,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 3,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 4,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 5,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 6,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 7,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 8,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 9,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 10,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 11,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id: 12,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/images/p1.jpg", // 679px × 829px
        image:
          "https://sc04.alicdn.com/kf/U73aa8c8500844d7c8c7dc55bb3992fec8.jpg",
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
    ],
  };

  res.json(data);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
