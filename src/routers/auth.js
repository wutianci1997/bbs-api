import express from "express";
import { Result } from "../utils/Result.js";
import { createToken } from "../utils/jwt.js";
const router = express.Router();

// 登录
router.post("/auth/login", (req, res) => {
  res.json(
    Result.status_code_200({
      token: createToken({ username: "张三", phone: "15952138543" }),
    })
  );
});

export default router;
