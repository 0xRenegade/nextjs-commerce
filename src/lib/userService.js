import { prisma } from "./prisma"

export async function findUserByEmail(email) {
  return prisma.users.findFirst({ where: { email } })
}

export async function createUser(data) {
  return prisma.users.create({ data })
}
