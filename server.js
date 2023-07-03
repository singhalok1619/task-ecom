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
        id:0,
        name: "Nike Slim shirt",
        slug: "nike-slim-shirt",
        category: "Shirts",
        image: "/p1.png", // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality shirt",
      },
      {
        id:1,
        name: "Nike Pant",
        slug: "nike-pant",
        category: "Pants",
        image: "/p2.png", // 679px × 829px
        price: 200,
        countInStock: 10,
        brand: "Nike",
        rating: 4.5,
        numReviews: 10,
        description: "high quality pant",
      },
    ],
  };

  res.json(data);
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
