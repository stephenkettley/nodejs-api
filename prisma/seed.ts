// the seed file is used to generate initial database data

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function run() {
  const user = await prisma.user.upsert({
    where: { email: "kettleystephen@gmail.com" },
    update: {},
    create: {
      email: "kettleystephen@gmail.com",
      name: "Steve",
    },
  });

  console.log({ user });
}

run()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
