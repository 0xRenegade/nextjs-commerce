const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.orderItems.deleteMany()
    await prisma.orders.deleteMany()
    await prisma.products.deleteMany()
    await prisma.category.deleteMany()
    await prisma.users.deleteMany()

    console.log("All tables truncated successfully.")
  } catch (error) {
    console.error("Error truncating tables:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
