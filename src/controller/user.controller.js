import User from '../models/user.model.js'

export const getUsers = async (req, res) => {
  const users = await User.find({})
  return res.status(200).json(users)
}

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate({
        path: 'tramits',
        populate: { path: 'descriptionTramit', select: 'title description requirement precio' }
      })
    return res.status(200).json(user)
  } catch (error) {
    return res.status(500).json({ message: 'Error on server' })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id)
    return res.sendStatus(204)
  } catch (error) {
    return res.status(500).json({ message: 'Error on server' })
  }
}
