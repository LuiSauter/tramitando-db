import mongoose, { Schema } from 'mongoose'

const subCategorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: 'Category'
  },
  tramits: [{
    type: Schema.Types.ObjectId,
    ref: 'Tramit'
  }]
}, { timestamps: true })

export default mongoose.model('SubCategory', subCategorySchema)
