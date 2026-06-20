const { Router } = require('express')
const authController = require("../controllers/auth.controller")
const authMiddleware = require("../middlewares/auth.middleware")

const authRouter = Router()

// register a new user
authRouter.post("/register", authController.registerUserController)

// login a uer 
authRouter.post("/login", authController.loginUserController)


// logout user(remove token from cookie and put it in blacklist)
authRouter.get("/logout", authController.logoutUserController)

// logged in user details
authRouter.get("/get-me", authMiddleware.authUser, authController.getMeController)


module.exports = authRouter