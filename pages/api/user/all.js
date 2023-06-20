import { prisma } from "../../../libs/prisma.libs";

export default function handler(req, res) {
  prisma.user.findMany().then((users) => {
    res.status(200).json({
      message: "All users",
      data : users
    });
  }
  ).catch((error) => {
    res.status(500).json({ error: error.message })
  }
  )
}
