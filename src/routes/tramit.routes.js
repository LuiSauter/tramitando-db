import { Router } from 'express'
import { getTramits, getTramit, createTramit } from '../controller/tramit.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', getTramits)
router.get('/:id', getTramit)
router.post('/', auth, createTramit)

export default router
