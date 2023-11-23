import { Router } from 'express'
import { getDescriptionTramits, getDescriptionTramit, createDescriptionTramit } from '../controller/descriptionTramit.controller.js'
// import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', getDescriptionTramits)
router.get('/:id', getDescriptionTramit)
router.post('/', createDescriptionTramit)

export default router
