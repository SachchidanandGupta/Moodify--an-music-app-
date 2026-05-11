const userModel = require("../models/user.model");
const blackListModel = require("../models/blacklist.model");
const jwt = require("jsonwebtoken");

async function authUser(req, res, next) {
  const token = req.cookies.token;
  if (!token) {
    return res.status(401).json({
      message: "Token not provided",
    });
  }

  const isTokenBlacklisted = await blackListModel.findOne({token});
  if(isTokenBlacklisted){
    return res.status(401).json({
        message:"Invalid token"
    })
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SCERET);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({
      message: "Invalid token",
    });
  }
}

module.exports = {authUser};
