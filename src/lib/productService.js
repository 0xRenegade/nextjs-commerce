import { prisma } from "./prisma"

export async function getProducts() {
  return prisma.products.findMany()
}

export async function getProductById(id) {
  return prisma.products.findFirst({
    where: { id },
  })
}

export async function getProductsByCategory(categoryId) {
  return prisma.products.findMany({
    where: { categoryId },
  })
}

export async function getCategories() {
  return prisma.category.findMany()
}
