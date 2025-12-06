import {Router} from "express"
import { verifyAdmin } from "../middleware/verifyAdmin.js"
import { protectRoute } from "../middleware/protectRoute.js"

const movieRouter = Router()

movieRouter.use(protectRoute)

movieRouter.get('/',()=>console.log(first))
movieRouter.get('/sorted',()=>console.log(first))
movieRouter.get('/search',()=>console.log(first))

//admin only
movieRouter.use(verifyAdmin)

movieRouter.post('/',()=>console.log(first))
movieRouter.put('/:id',()=>console.log(first))
movieRouter.delete('/:id',()=>console.log(first))

export {movieRouter}