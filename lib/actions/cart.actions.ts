"use server";

import { cookies } from "next/headers";
import { CartItem } from "@/types";
import { formatError } from "../validators";

export async function addItemToCart(data: CartItem) {
  try {

    const sessionCartId = (await cookies()).get("sessionCartId")?.value

    return {
      success: true,
      message: "Item added to cart",
    };
  } catch (error) {
    return {
      success: false,
      message: formatError(error),
    };
  }
}
