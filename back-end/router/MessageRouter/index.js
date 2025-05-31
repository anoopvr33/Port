import Message from "../../db/Schemas/MessageSchema/index.js";
import express from "express";
import CheckToken from "../../middleware/checktoken.js";

const router = express.Router();

router.post("/message", async (req, res) => {
  //   const Message = new Message.create({
  //     message: req.body.message,
  //     sender: req.body.sender,
  //     receiver: req.body.receiver,
  //   });
  const body = { ...req.body };
  try {
    const msg = await Message.create(body);
    if (msg) {
      res.status(200).json({ message: msg });
    } else {
      res.status(400).json({ msgError: "Error" });
    }
  } catch (e) {
    res.status(500).json({ someError: e.message });
  }
});

router.get("/get-message", CheckToken(["ADMIN"]), async (req, res) => {
  const msg = await Message.find();
  res.status(200).json(msg);
});
export default router;
