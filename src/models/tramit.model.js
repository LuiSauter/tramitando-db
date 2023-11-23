import { Schema, model } from 'mongoose'

const TramitSchema = new Schema({
  message: {
    type: String
  },
  state: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  descriptionTramit: {
    type: Schema.Types.ObjectId,
    ref: 'DescriptionTramit'
  },
  subCategory: {
    type: Schema.Types.ObjectId,
    ref: 'SubCategory'
  }
}, { timestamps: true })

export default model('Tramit', TramitSchema)
