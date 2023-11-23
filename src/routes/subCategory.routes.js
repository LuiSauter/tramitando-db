import { Router } from 'express'
import { getSubCategories, getSubCategory, createSubCategory } from '../controller/subCategory.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', getSubCategories)
router.get('/:id', getSubCategory)
router.post('/', auth, createSubCategory)

export default router
