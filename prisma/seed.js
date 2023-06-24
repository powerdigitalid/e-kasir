const PrismaClient = require('@prisma/client').PrismaClient;
const prisma = new PrismaClient();

async function main() {
  const User = await prisma.user.createMany({
    data: [
      {
        name: 'Alice',
        username: 'alice',
        password: 'alice',
      },
      {
        name: 'Admin',
        username: 'admin',
        password: 'admin',
      },
    ],
    skipDuplicates: true,
  });
  const product = await prisma.product.createMany({
    data: [
      {
        product_name: 'Product 1',
        product_price: 10000,
        product_stock: 10,
      },
    ],
    skipDuplicates: true,
  });
  console.log({User, product });
}  

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1)
  });