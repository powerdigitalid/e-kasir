const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
  try {
    const products = [
      {
        product_name: 'Product 1',
        product_price: 10000,
        product_stock: 10,
      },
      {
        product_name: 'Product 2',
        product_price: 20000,
        product_stock: 5,
      },
      {
        product_name: 'Product 3',
        product_price: 15000,
        product_stock: 8,
      },
    ];

    for (const productData of products) {
      await prisma.product.create({
        data: productData,
      });
    }

    console.log('Data seeded successfully.');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
