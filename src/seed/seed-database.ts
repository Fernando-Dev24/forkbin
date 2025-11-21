import { initialData } from "./seed-data";
import { prisma } from "../lib/prisma";
import dotenv from "dotenv";

dotenv.config();

async function main() {
  await prisma.fork.deleteMany();
  await prisma.bin.deleteMany();
  await prisma.account.deleteMany();
  await prisma.user.deleteMany();

  const { users, bins } = initialData;

  await prisma.user.createMany({
    data: users,
  });

  // Obtenemos solamente el ID del usuario insertado para mapear los bins y poder subir datos a la db
  const user = await prisma.user.findFirst({
    where: {
      email: "refer@gmail.com",
    },
  });

  if (!user) throw new Error("User not found");

  const binsData = bins.map((bin) => ({
    ...bin,
    authorId: user.id,
  }));

  await prisma.bin.createMany({
    data: binsData,
  });
}

main()
  .then(() => {
    console.log("Seed executed correctly");
    process.exit(0);
  })
  .catch((err) => console.log(err));
