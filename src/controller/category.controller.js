import CategoryModel from '../models/category.model.js'

export const getCategories = async (req, res) => {
  const subCategories = await CategoryModel.find({})
  return res.status(200).json(subCategories)
}
export const getCategory = async (req, res) => {
  const subCategory = await CategoryModel.findById(req.params.id)
  return res.status(200).json(subCategory)
}
export const createCategory = async (req, res) => {

}
