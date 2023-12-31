import TramitModel from '../models/tramit.model.js'
import descriptionTramitModel from '../models/descriptionTramit.model.js'
import userModel from '../models/user.model.js'

export const getTramits = async (req, res) => {
  const tramits = await TramitModel.find({})
  return res.status(200).json(tramits)
}
export const getTramit = async (req, res) => {
  const tramit = await TramitModel.findById(req.params.id)
    .populate({
      path: 'user', select: 'name email photo ci direction phone'
    })
    .populate({ path: 'descriptionTramit', select: 'title description requirement precio' })
  return res.status(200).json(tramit)
}
export const createTramit = async (req, res) => {
  try {
    const { state, user, descriptionTramit } = req.body
    const newTramit = new TramitModel({
      state, user, descriptionTramit
    })
    await newTramit.save()
    await descriptionTramitModel.findByIdAndUpdate(descriptionTramit, {
      $push: { tramits: [newTramit._id] }
    })
    await userModel.findByIdAndUpdate(user, {
      $push: { tramits: [newTramit._id] }
    })
    return res.sendStatus(201)
  } catch (error) {

  }
}
