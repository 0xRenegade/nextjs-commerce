import { getProductById } from "@/lib/productService"
import { NextRequest, NextResponse } from "next/server"

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const productId = parseInt(id)

  if (Number.isNaN(productId)) {
    return NextResponse.json(
      { error: "Invalid Product ID provided" },
      { status: 400 }
    )
  }

  const product = await getProductById(productId)

  if (!product) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 })
  }

  return NextResponse.json({ product: product }, { status: 200 })
}
