import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="overflow-hidden shadow-md rounded-2xl">
      <Link href={`/product/${product.id}`}>
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-48 object-cover hover:opacity-90 transition"
        />
      </Link>
      <CardContent className="space-y-2 mt-2">
        <Link href={`/product/${product.id}`}>
          <h3 className="text-lg font-semibold hover:underline">
            {product.title}
          </h3>
        </Link>
        <p className="text-sm text-muted-foreground">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="font-medium text-green-600">${product.price}</span>
          <Button className="cursor-pointer">Add to Cart</Button>
        </div>
      </CardContent>
    </Card>
  )
}
