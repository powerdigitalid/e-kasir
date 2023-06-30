import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
    const { id } = req.query;
    if (req.method === 'GET') {
        prisma.product.findUnique({
            where: {
                id: id
            }
        }).then((data) => {
            res.status(200).json({ data });
        }
        ).catch((error) => {
            res.status(500).json({ error });
        }
        );
    }
}