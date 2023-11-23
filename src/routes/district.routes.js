import { Router } from 'express'
import { getDistricts, getDistrict, createDistrict } from '../controller/district.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', getDistricts)
router.get('/:id', getDistrict)
router.post('/', auth, createDistrict)

export default router
