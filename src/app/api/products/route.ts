import { getProducts } from "@/lib/productService"

export async function GET() {
  const products = await getProducts()

  return new Response(JSON.stringify({ products: products }), {
    status: 200,
    headers: {
      "Content-Type": "application.json",
    },
  })
}
