"use client"

import CategorySidebar from "@/components/layout/CategorySidebar"
import ProductList from "@/components/layout/ProductList"
import { CategoryProvider } from "@/context/CategoryContext"

export default function Products() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 p-4">
      <CategoryProvider>
        <CategorySidebar />
        <ProductList />
      </CategoryProvider>
    </main>
  )
}
