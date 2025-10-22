"use server"

import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { Product } from "@/types";

export async function getLatestProducts() {

  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" }
  })

  return data.map((product: Product) => ({
    ...product,
    price: product.price.toString(),
    rating: product.rating.toString()
  }))
}