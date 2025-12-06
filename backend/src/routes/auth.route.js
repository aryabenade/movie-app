import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js"
import { registerUser } from "../controllers/auth.controller.js"

const authRouter = Router()

authRouter.post('/register',registerUser)
authRouter.post('/login',()=>console.log(first))

authRouter.post('/logout',protectRoute)

export { authRouter }