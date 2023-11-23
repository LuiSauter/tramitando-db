import { Router } from 'express'
import { getUsers, getUser, deleteUsers } from '../controller/user.controller.js'

const router = Router()

router.get('/', getUsers)
router.get('/:id', getUser)
// TODO: actualizar usuario
// router.put('/:id', updateUser)
router.delete('/:id', deleteUsers)

export default router
