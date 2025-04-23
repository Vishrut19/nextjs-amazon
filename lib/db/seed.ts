import dotenv from "dotenv";
import path from "path";
import data from "@/lib/data";
import { connectToDatabase } from ".";
import Product from "./models/products.models";

// By calling this we can have access to the environment variables.
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

const main = async () => {
  try {
    const { products } = data;
    await connectToDatabase(process.env.MONGODB_URI);

    // This will delete all the products in the database.
    await Product.deleteMany();

    // This will create new products in the database.
    const createdProducts = await Product.insertMany(products);
    console.log({
      createdProducts,
      message: "Products created and data seeded successfully",
    });
    process.exit(0);
  } catch (error) {
    console.error(error);
    throw new Error("Error seeding data");
  }
};

main();
