import { prisma } from "../../../libs/prisma.libs.js";

export default function handler(req, res){
    //get all data from table product from database mongodb
    prisma.hitungLaba.findMany()
    .then((data) => {
        res.status(200).json({data});
    }
    ).catch((error) => {
        res.status(500).json({error});
    }
    );
}