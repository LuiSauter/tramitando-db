import DescriptionTramitModel from '../models/descriptionTramit.model.js'
import SubCategoryModel from '../models/subCategory.js'
import CategoryModel from '../models/category.model.js'
import DistrictModel from '../models/district.model.js'

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
    const { titleCategory, titleSubCategory, title, description, location, dependencie, idDistrict, requirement } = req.body

    const isExistSubCategory = await SubCategoryModel.findOne({ title: titleSubCategory })

    let subCategSaved = isExistSubCategory

    if (!isExistSubCategory) {
      const newSubCategory = new SubCategoryModel({
        title: titleSubCategory
      })
      subCategSaved = await newSubCategory.save()
    }

    const isExistCategory = await CategoryModel.findOne({ title: titleCategory })
    let categorySaved = isExistCategory
    const district = await DistrictModel.findOne({ nro: idDistrict })
    if (!isExistCategory) {
      const newCategory = new CategoryModel({
        title: titleCategory,
        subCategories: [subCategSaved._id.toString()],
        district: district._id
      })
      categorySaved = await newCategory.save()
    }

    await SubCategoryModel.findByIdAndUpdate(subCategSaved._id, { category: categorySaved._id })

    const newDescriptionTramit = new DescriptionTramitModel({
      title, description, location, dependencie, category: categorySaved._id, subCategory: subCategSaved._id, idDistrict: district._id, requirement
    })
    await newDescriptionTramit.save()
    await SubCategoryModel.findByIdAndUpdate(subCategSaved._id, {
      $push: { descriptionTramits: [newDescriptionTramit._id] }
    })
    return res.status(201).json({ message: 'Tramit description created successfully' })
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}
