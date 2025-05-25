import { PrismaClient } from "@prisma/client";
import { users } from "../src/data/users";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: users,
  });

  const allUsers = await prisma.user.findMany();
  console.log("users: ", allUsers);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
