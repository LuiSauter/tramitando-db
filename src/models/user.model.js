import { Schema, model } from 'mongoose'

const userSchema = new Schema({
  // ci: {
  //   required: true,
  //   type: Number,
  //   unique: true,
  //   trim: true
  // },
  name: {
    required: true,
    type: String
  },
  email: {
    required: true,
    type: String,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  // direction: {
  //   type: String
  // },
  // phone: {
  //   type: Number,
  //   trim: true
  // },
  photo: {
    type: String,
    trim: true
  },
  DistrictAgent: {
    type: Schema.Types.ObjectId,
    ref: 'District'
  },
  // NeighborhoodRepresentative: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'Neighborhood'
  // },
  tramits: [{
    type: Schema.Types.ObjectId,
    ref: 'Tramit'
  }]
}, { timestamps: true })

export default model('User', userSchema)
