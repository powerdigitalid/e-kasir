import { prisma } from "../../../libs/prisma.libs";
import path from "path";
import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};
 
const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/upload",
    filename: (req, file, cb) => {
      const ext = path.extname(file.originalname);
      const name = path.basename(file.originalname, ext);
      cb(null, `${name}-${Date.now()}${ext}`);
    }
  }),
  limits: {
    fileSize: 10000000, // 1 MB
  },
});

export default async (req, res) => {
  if (req.method === "POST") {
    upload.single("image")(req, res, async (err) => {
      if (err) {
        return res.status(400).json({ error: err.message });
      }
      const { name, price, desc } = req.body;
      const image = `/upload/${req.file.filename}`;
      const product = await prisma.product.create({
        data: {
          name,
          price: parseInt(price),
          desc,
          image,
        },
      });
      return res.status(200).json(product);
    });
  }
};