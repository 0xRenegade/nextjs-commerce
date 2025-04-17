import { PrismaClient } from "@prisma/client"
import fs from "fs"
import bcrypt from "bcrypt"

const prisma = new PrismaClient()

const seedDatabase = async () => {
  try {
    const data = JSON.parse(fs.readFileSync("prisma/data.json", "utf-8"))

    const categories = [
      { name: "Electronics" },
      { name: "Food" },
      { name: "Clothing" },
      { name: "Pet Toys" },
      { name: "Shoes" },
    ]

    await prisma.category.createMany({
      data: categories,
    })

    const newCategories = await prisma.category.findMany()

    newCategories.forEach(async (row) => {
      data.forEach(async (item) => {
        if (row.name === item.category) {
          item.data.forEach(async (currentItem) => {
            await prisma.products.create({
              data: {
                title: currentItem.title,
                description: currentItem.description,
                price: parseFloat(currentItem.price),
                imageUrl: currentItem.image,
                categoryId: row.id,
                inventory: Math.floor(Math.random() * 11),
              },
            })
          })
        }
      })
    })

    const password = await bcrypt.hash("admin123", 10)

    await prisma.users.create({
      data: {
        email: "admin@admin.com",
        password: password,
        role: "SHOP_OWNER",
      },
    })
  } catch (error) {
    console.log(error)
  }
}

seedDatabase()
