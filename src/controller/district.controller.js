import DistrictModel from '../models/district.model.js'

export const getDistricts = async (req, res) => {
  const districts = await DistrictModel.find({})
  return res.status(200).json(districts)
}
export const getDistrict = async (req, res) => {
  try {
    const district = await DistrictModel.findById(req.params.id)
    return res.status(200).json(district)
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
export const createDistrict = async (req, res) => {
  try {
    const { nro } = req.body
    const isExistDistrict = await DistrictModel.findOne({ nro })
    if (isExistDistrict) {
      return res.status(302).json({ message: 'District is exist' })
    }
    const newDistrict = new DistrictModel({ ...req.body })
    await newDistrict.save()
    return res.status(201).json({ message: 'District created successfully' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
