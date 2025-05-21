import express from "express";
// import bcrypt from "jwt-token";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const router = express.Router();

router.post("/login", async (req, res) => {
  const body = { ...req.body };
  const myId = "anoopvranoop33@gmail.com";

  const hashedpassword = await bcrypt.hash("admin", 2);
  const pass = hashedpassword;

  if (body.email == myId && bcrypt.compare(body.password, pass)) {
    const token = jwt.sign(
      { email: body.email, role: "ADMIN" },
      process.env.ADMIN_SECRET_KEY,
      {
        expiresIn: "2h",
      }
    );

    return res.json({
      message: "Login Successfull",
      status: 200,
      token: token,
    });
  }
  return res.json({ message: "Invalid Email", status: 400 });
});

export default router;
