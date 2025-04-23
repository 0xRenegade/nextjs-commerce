import { getProductsByCategory } from "@/lib/productService"

export async function GET(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params
  const categoryId = parseInt(id)

  if (Number.isNaN(categoryId)) {
    return new Response(
      JSON.stringify({ error: "Invalid Category ID provided" }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
  }

  const products = await getProductsByCategory(categoryId)

  return new Response(JSON.stringify({ products: products }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
