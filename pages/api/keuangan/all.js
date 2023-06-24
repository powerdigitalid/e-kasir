import { prisma } from "../../../libs/prisma.libs.js";

export default async function handler(req, res) {
    //get all keuangan data include type
    prisma.keuangan.findMany({
        include: {
            type: true,
        },
    })
        .then((data) => {
            res.status(200).json({ data });
        }
        ).catch((error) => {
            res.status(500).json({ error });
        }
        );
}


