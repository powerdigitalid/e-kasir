import { prisma } from "../../../libs/prisma.libs";


export default async (req, res) => {
  //create laba to database
  const { total_pengeluaran, total_pemasukan, total_laba, date } = req.body;
  try {
    const laba = await prisma.hitungLaba.create({
      data: {
        total_pengeluaran: parseInt(total_pengeluaran),
        total_pemasukan: parseInt(total_pemasukan),
        total_laba: parseInt(total_pemasukan) - parseInt(total_pengeluaran),
        date: new Date(date),
      },
    });
    res.status(201).json({
      message: "Create laba success",
      data: laba,
    });
  } catch (error) {
    console.error("Create laba error:", error);
    res.status(500).json({
      message: "Failed to create laba",
      error: error.message,
    });
  }
};