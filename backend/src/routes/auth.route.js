import { Router } from "express"
import { protectRoute } from "../middleware/protectRoute.js"

const authRouter = Router()

authRouter.post('/register')
authRouter.post('/login')

authRouter.post('/logout',protectRoute)

export { authRouter }