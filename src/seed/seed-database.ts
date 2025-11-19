import { initialData } from "./seed-data";
import { prisma } from "../lib/prisma";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  await prisma.fork.deleteMany();
  await prisma.bin.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const { users } = initialData;

  await prisma.user.createMany({
    data: users,
  });
}

main()
  .then(() => {
    console.log("Seed executed");
    process.exit(0);
  })
  .catch((err) => console.log(err));
