import express from "express";
import MessageRouter from "./MessageRouter/index.js";
import AdminRouter from "./AdminRouter/index.js";

const router = express.Router();

router.use("/guest", MessageRouter);
router.use("/admin", AdminRouter);

export default router;
