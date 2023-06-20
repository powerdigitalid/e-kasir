import { prisma } from "../../../libs/prisma.libs.js";

export default function handler(req, res){
  prisma.product.findMany().then((product) => {
    res.status(200).json({
      message: "All product",
      data : product
    });
  }
  ).catch((error) => {
    res.status(500).json({ error: error.message })
  }
  )
}