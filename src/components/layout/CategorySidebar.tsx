"use client"

import { useEffect, useState } from "react"
import { Category } from "@/types/product"
import { useCategory } from "@/context/CategoryContext"

export default function CategorySidebar() {
  const [categories, setCategories] = useState<Category[]>([])
  const { setSelectedCategory } = useCategory()

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch("/api/categories")
      const data = await res.json()
      setCategories(data.categories)
    }
    fetchCategories()
  }, [])

  return (
    <aside className="bg-white p-4 rounded-xl shadow-sm space-y-2">
      <h2 className="text-xl font-semibold">Categories</h2>
      <ul className="space-y-1">
        {categories.map((category: Category) => (
          <li key={category.id}>
            <button
              className="text-left w-full text-gray-700 hover:text-black cursor-pointer"
              onClick={() => setSelectedCategory(category)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  )
}
