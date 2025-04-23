import mongoose from "mongoose";

// we are using it to access to the database and not to create new connection on every page load.
const cached = (global as any).mongoose || { conn: null, promise: null };

console.log(cached);

export const connectToDatabase = async (
  MONGODB_URI = process.env.MONGODB_URI
) => {
  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise = cached.promise || mongoose.connect(MONGODB_URI);

  cached.conn = await cached.promise;

  console.log("Connected to MongoDB", cached.conn);

  return cached.conn;
};
