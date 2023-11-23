import { Router } from 'express'
import { getUsers, getUser, deleteUser } from '../controller/user.controller.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
// TODO: actualizar usuario
// router.put('/:id', updateUser)
router.delete('/:id', deleteUser)

export default router
