import { prisma } from "../../../libs/prisma.libs.js";

export default function handler(req, res){
    if(req.method === "GET"){
        const product = prisma.product.findMany();
        return res.status(200).json({data: product});
    }
}