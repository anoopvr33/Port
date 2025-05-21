import jwt from "jsonwebtoken";

const CheckToken = (role) => {
  return (req, res, next) => {
    // res.json("entered");
    try {
      //   const token = req.header("x-auth-token");
      const token = req.headers.authorization;
      if (!token) {
        return res
          .status(401)
          .json("Access Denied. You are not authorised. Token not found");
      }

      const ogToken = token.split(" ")[1];

      const secretkey = process.env.ADMIN_SECRET_KEY;

      const isValid = jwt.verify(ogToken, secretkey);
      if (!role.includes(isValid.role)) {
        return res.json({
          message: "you are not authorized or role not match",
        });
      }

      next();
    } catch (e) {
      res
        .status(400)
        .json({
          message: "you are not authorized or Something error occured",
          e,
        });
    }
  };
};

export default CheckToken;
