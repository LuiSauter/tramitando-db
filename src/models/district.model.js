import mongoose from 'mongoose'
import { Schema } from 'zod'

const districtSchema = new Schema({
  nro: {
    required: true,
    type: Number
  },
  direction: String,
  deputyMayor: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    default: ''
  },
  idOwner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  idMembers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  categories: [{
    type: Schema.Types.ObjectId,
    ref: 'Category'
  }]
}, { timestamps: true })

export default mongoose.model('District', districtSchema)
