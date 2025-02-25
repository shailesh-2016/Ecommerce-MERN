const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  console.log(req.headers.authorization);
  try {
    let token = req.headers.authorization;

    if (!token) {
      res.json({
        message: "token not found",
      });
    }
    token = token.split(" ")[1];
    console.log("token: ", token);
    const verifyToken = jwt.verify(token, process.env.SECRET);
    console.log(verifyToken);
    if (verifyToken) {
      req.admin = verifyToken;
      next();
    } else {
      res.json({
        error: true,
        message: "token not verify",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.isAdmin = (req, res, next) => {
  try {
    const { role } = req.admin;
    if (role === 1) {
      next();
    } else {
      res.json({
        error: true,
        message: "you are not admin",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};

exports.isUser = (req, res, next) => {
  try {
    const { role } = req.admin;
    if (role === 0) {
      next();
    } else {
      res.json({
        error: true,
        message: "you are not user",
      });
    }
  } catch (error) {
    console.log("error: ", error);
  }
};
