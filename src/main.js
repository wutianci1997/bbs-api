import express from "express";
import bodyParser from "body-parser";
import { authentication } from "./middlewares/authentication.js";
import { Result } from "./utils/Result.js";
import routers from "./routers/index.js";

const app = express();

// static resource
app.use(express.static("public"));

// home
app.get("/", (_req, res, _next) => {
  res.json(Result.status_code_200("欢迎访问，xxxx系统服务。"));
});

// authentication
app.use(authentication);

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// routers
app.use(routers);

// 404
app.get("*", (req, res, next) => {
  res.statusCode = 404;
  res.json(Result.status_code_404());
});

app.listen(8000, () => {
  console.log("successful");
});
