import { connectToDB } from "@/lib/connect";
import { Tour } from "@/lib/models";
import { NextResponse } from "next/server";

interface Item {
  img: string;
  name: string;
  info: string;
}

export const GET = async (req) => {
  try {
    connectToDB();
    const tours = await Tour.find();
    console.log("Success to fetch items");
    return NextResponse.json(tours);
  } catch (error) {
    console.log("Failed to fetch Items");
  }
};
