"use client"

import { createContext, useContext, useState, ReactNode } from "react"
import { Category } from "@/types/product"

type CategoryContextType = {
  selectedCategory: Category | null
  setSelectedCategory: (category: Category | null) => void
}

const CategoryContext = createContext<CategoryContextType | undefined>(
  undefined
)

export const CategoryProvider = ({ children }: { children: ReactNode }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  )

  return (
    <CategoryContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}

export const useCategory = () => {
  const context = useContext(CategoryContext)
  if (!context)
    throw new Error("useCategory must be used within a CategoryProvider")
  return context
}
