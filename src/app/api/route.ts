import { connectToDB } from "@/lib/connect";
import { Tour } from "@/lib/models";
import { NextResponse } from "next/server";
import { NextApiRequest } from "next";

interface Item {
  img: string;
  name: string;
  info: string;
}

export const GET = async (req: NextApiRequest) => {
  try {
    connectToDB();
    const tours = await Tour.find();
    console.log("Success to fetch items");
    return NextResponse.json(tours);
  } catch (error) {
    console.log("Failed to fetch Items");
  }
};
