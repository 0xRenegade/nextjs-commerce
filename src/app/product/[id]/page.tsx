"use client"

import { Product } from "@/types/product"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"

export default function ProductPage() {
  const [product, setProduct] = useState<Product | null>(null)
  const params = useParams() as { id: string }
  const id = params.id

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`/api/product/${id}`)
      const data = await res.json()
      setProduct(data.product)
    }

    fetchProduct()
  }, [id])

  if (!product) return <p>Loading...</p>

  return (
    <main className="flex flex-1 flex-col items-center justify-center text-center p-4 gap-5">
      <div className="max-w-4xl mx-auto p-6">
        <div className="grid md:grid-cols-2 gap-8">
          {product && (
            <img
              src={product.imageUrl}
              alt={product.title}
              width={600}
              height={400}
              className="rounded-xl object-cover w-full h-auto"
            />
          )}
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold mb-2 text-left">
              {product.title}
            </h1>
            {/* <p className="text-gray-500 mb-4">{product.category?.name}</p> */}
            <p className="text-lg mb-6 text-left">{product.description}</p>
            <div className="flex justify-between items-center">
              <div className="text-2xl font-bold text-green-600 text-left">
                ${product.price}
              </div>
              <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 cursor-pointer max-w-[126px]">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
