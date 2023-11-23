import mongoose, { Schema } from 'mongoose'

const subCategorySchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  descriptionTramits: [{
    type: Schema.Types.ObjectId,
    ref: 'DescriptionTramit'
  }]
}, { timestamps: true })

export default mongoose.model('SubCategory', subCategorySchema)
