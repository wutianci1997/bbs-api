import jwt from "jsonwebtoken";

const secret = "qweQWE123!@#";

/**
 * @description - 创建token
 * @param {any} data
 * @returns {string}
 */
const createToken = (data) => {
  return jwt.sign(data, secret, {
    expiresIn: "48h",
  });
};

/**
 * @description - 效验
 * @param {string} token
 * @returns {jwt.JwtPayload | null}
 */
const verifyToken = (token) => {
  try {
    const result = jwt.verify(token, secret);
    if (typeof result === "string") {
      throw Error("");
    }
    return result;
  } catch (error) {
    return null;
  }
};
export { createToken, verifyToken };
