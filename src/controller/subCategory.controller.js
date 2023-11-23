import SubCategoryModel from '../models/subCategory.js'

export const getSubCategories = async (req, res) => {
  const subCategories = await SubCategoryModel.find({})
  return res.status(200).json(subCategories)
}
export const getSubCategory = async (req, res) => {
  const subCategory = await SubCategoryModel.findById(req.params.id)
  return res.status(200).json(subCategory)
}
export const createSubCategory = async (req, res) => {

}
