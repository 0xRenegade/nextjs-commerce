"use client"

import { useEffect, useState } from "react"
import { Input } from "@/components/ui/input"
import ProductCard from "./ProductCard"
import { Product } from "@/types/product"
import { useCategory } from "@/context/CategoryContext"

export default function ProductList() {
  const [search, setSearch] = useState("")
  const { selectedCategory } = useCategory()
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchProducts = async () => {
      const url = selectedCategory
        ? `/api/products/category/${selectedCategory?.id}`
        : "/api/products"
      const res = await fetch(url)
      const data = await res.json()
      console.log(data)
      setProducts(data.products)
    }
    fetchProducts()
  }, [selectedCategory])

  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search products..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="max-w-sm"
      />
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {filtered.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}
