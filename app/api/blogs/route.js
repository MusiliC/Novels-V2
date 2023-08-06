import Book from "@/models/book";
import { connectToDB } from "@/utilis/database";

export const dynamic = "force-dynamic";

export const GET = async (req) => {
  try {
    await connectToDB();

    const blogs = await Book.find({}).populate("creator");

    return new Response(JSON.stringify(blogs), {
      status: 200,
    });
  } catch (error) {
    return new Response(error, {
      status: 500,
    });
  }
};
