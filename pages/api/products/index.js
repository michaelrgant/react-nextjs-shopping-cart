import nc from "next-connect";
import Product from "../../../models/Products"
import db from "../../../utils/db";

const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  const products = await Product.find({});
  console.log(products)
  await db.disconnect();
  res.send(products);
});

export default handler;
