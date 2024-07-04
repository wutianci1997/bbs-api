import { whitePathList } from "../utils/config.js";
import { Result } from "../utils/Result.js";
import { verifyToken } from "../utils/jwt.js";
/**
 * @description - 鉴权
 * @param {any} req
 * @param {any} res
 * @param {any} next
 * @returns {void | undefined}
 */
const authentication = (req, res, next) => {
  // 1.请求路径是白名单直接放行
  if (whitePathList.includes(req.path)) {
    next();
    return;
  }
  // 2.效验token
  const authentication = req.header("Authentication");
  if (authentication === undefined) {
    res.statusCode = 401;
    res.json(Result.status_code_401("请在请求头中加入Authentication。"));
    return;
  }
  const result = verifyToken(authentication);
  if (result === null) {
    res.statusCode = 401;
    res.json(Result.status_code_401());
    return;
  }
  // 3.用户信息添加req（猴子修补）
  req.user = result;
  next();
};

export { authentication };
