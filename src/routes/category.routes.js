import { Router } from 'express'
import { getCategories, getCategory, createCategory } from '../controller/category.controller.js'
import { auth } from '../middlewares/auth.middleware.js'

const router = Router()

router.get('/', getCategories)
router.get('/:id', getCategory)
router.post('/', auth, createCategory)

export default router
