import { getCategories } from "@/lib/productService"

export async function GET() {
  const categories = await getCategories()

  return new Response(JSON.stringify({ categories: categories }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  })
}
