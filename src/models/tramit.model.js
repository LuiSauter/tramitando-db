import { Schema, model } from 'mongoose'

const TramitSchema = new Schema({
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
  }
}, { timestamps: true })

export default model('Tramit', TramitSchema)
