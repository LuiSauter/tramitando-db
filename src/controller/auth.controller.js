import User from '../models/user.model.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { TOKEN_SECRET } from '../config.js'
import { createAccessToken } from '../helpers/jwt-generate.js'

export const register = async (req, res) => {
  try {
    const { name, email, password, photo, ci, direction, phone } = req.body

    const userFound = await User.findOne({ email })

    if (userFound) {
      return res.status(400).json({ message: 'The email is already in use' })
    }

    // hashing the password
    const passwordHash = await bcrypt.hash(password, 10)

    // creating the user
    const newUser = new User({
      photo,
      name,
      email,
      ci,
      direction,
      phone,
      password: passwordHash
    })

    // saving the user in the database
    const userSaved = await newUser.save()

    // create access token
    const token = await createAccessToken({
      id: userSaved._id
    })

    res.cookie('token', token, {
      httpOnly: process.env.NODE_ENV !== 'development',
      secure: true,
      sameSite: 'none'
    })

    console.log(userSaved)

    res.json({
      id: userSaved._id,
      photo: userSaved.photo,
      name: userSaved.name,
      email: userSaved.email
    })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const { email, password } = req.body
    const userFound = await User.findOne({ email })

    if (!userFound) {
      return res.status(400).json({
        message: 'The email does not exist'
      })
    }

    const isMatch = await bcrypt.compare(password, userFound.password)
    if (!isMatch) {
      return res.status(400).json({
        message: 'The password is incorrect'
      })
    }

    const token = await createAccessToken({
      id: userFound._id,
      username: userFound.username
    })

    res.cookie('token', token, {
      httpOnly: process.env.NODE_ENV !== 'development'
      // secure: true,
      // sameSite: 'none'
    })

    res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email
    })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export const verifyToken = async (req, res) => {
  const { token } = req.cookies
  console.log(token)
  if (!token) return res.send(false)

  jwt.verify(token, TOKEN_SECRET, async (error, user) => {
    if (error) return res.sendStatus(401)

    const userFound = await User.findById(user.id)
    if (!userFound) return res.sendStatus(401)

    return res.json({
      id: userFound._id,
      name: userFound.name,
      email: userFound.email
    })
  })
}

export const logout = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    secure: true,
    expires: new Date(0)
  })
  return res.sendStatus(200)
}
