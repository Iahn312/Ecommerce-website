// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import db from "../../utils/db";
async function handler(req, res) {
  db.connectDb();
  db.disconnectDb();
  res.status(200).json({ name: "Iahn" });
}

export default handler;
