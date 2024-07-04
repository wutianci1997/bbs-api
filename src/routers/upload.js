import express from "express";
import { Result } from "../utils/Result.js";
import multer from "multer";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public/uploads/"); // 文件将被保存到uploads目录下
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // 文件名
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// 上传文件
router.post("/api/upload", upload.single("file"), (req, res) => {
  res.json(
    Result.status_code_200({
      path: `uploads/${req.file?.filename}`,
    })
  );
});

export default router;
