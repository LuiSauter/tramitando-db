import DescriptionTramitModel from '../models/descriptionTramit.model.js'

export const getDescriptionTramits = async (req, res) => {
  try {
    const descTramit = await DescriptionTramitModel.find({})
    return res.status(200).json(descTramit)
  } catch (error) {
    return res.sendStatus(500)
  }
}
export const getDescriptionTramit = async (req, res) => {
  try {
    const descTramit = await DescriptionTramitModel.findById(req.params.id)
    return res.status(200).json(descTramit)
  } catch (error) {
    return res.sendStatus(500)
  }
}

export const createDescriptionTramit = async (req, res) => {
  try {
    const newDescriptionTramit = new DescriptionTramitModel({ ...req.body })
    await newDescriptionTramit.save()
    return res.sendStatus(201)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
