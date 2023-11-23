import mongoose, { Schema } from 'mongoose'

const categorySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  subCategories: [{
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  }],
  district: {
    type: Schema.Types.ObjectId,
    ref: 'District'
  }
}, { timestamps: true })

export default mongoose.model('Category', categorySchema)
