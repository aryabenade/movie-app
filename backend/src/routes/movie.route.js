import {Router} from "express"
import { verifyAdmin } from "../middleware/verifyAdmin.js"
import { protectRoute } from "../middleware/protectRoute.js"

const movieRouter = Router()

movieRouter.use(protectRoute)

movieRouter.get('/',)
movieRouter.get('/sorted',)
movieRouter.get('/search',)

//admin only
movieRouter.use(verifyAdmin)

movieRouter.post('/',)
movieRouter.put('/:id',)
movieRouter.delete('/:id',)

export {movieRouter}