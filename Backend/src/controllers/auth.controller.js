const userModel = require("../models/user.model");

const blackListModel = require("../models/blacklist.model")

const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

async function registerController(req, res) {
  const { username, email, password } = req.body;

  const isUserExists = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  if (isUserExists) {
    return res.status(409).json({
      message: "User already exists. please login.",
      status: "failed",
    });
  }

  const hash = await bcrypt.hash(password, 10);
  const user = await userModel.create({
      username,
      email,
      password: hash,
    });
    
  const token = jwt.sign(
    { id: user._id,
     email: user.email },
    process.env.JWT_SCERET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);

  return res.status(201).json({
    user: {
      username: user.username,
      email: user.email,
    },
    message: "User registered successfully...",
    status: "passed",
    token,
  });
}

async function loginController(req,res){
    const {email,password,username} = req.body;

    const user = await userModel.findOne({
        $or:[
            {email},
            {username}
        ]
    }).select("+password");
    if(!user){
        return res.status(401).json({
            message:"Invalid credentials"
        })
    }
    // console.log(user);
   const isPasswordCorrect = await bcrypt.compare(password,user.password);
   if(!isPasswordCorrect){
      return res.status(401).json({
        message:"Invalid credentials"
      })
   }
      const token = jwt.sign(
    { id: user._id,
     email: user.email },
    process.env.JWT_SCERET,
    {
      expiresIn: "1d",
    },
  );
  res.cookie("token", token);
  return res.status(200).json({
    message:"user is logged in..",
    user:{
        username:user.username,
        email:user.email
    },
    token
  })
  
}

async function getMeController(req,res){
 const user = await userModel.findById(req.user.id);
 if(user){
  return res.status(200).json({
    message:"user fetched successfully..",
    user
  })
 }

}

async function logOutController(req,res){
   const token = req.cookies.token;
   if(!token){
    res.status(401).json({
      message:"Invalid access. Token not provided"
    })
   }
   res.clearCookie("token");
    await blackListModel.create({
    token
   });

   res.status(201).json({
    message:"token blacklisted successfully...",
    
   })
}
module.exports = {
  registerController,
  loginController,
  getMeController,
  logOutController
};
