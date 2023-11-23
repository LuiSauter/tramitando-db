import mongoose, { Schema } from 'mongoose'

const districtSchema = new Schema({
  nro: {
    required: true,
    type: Number,
    unique: true
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
    ref: 'User',
    required: true
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
