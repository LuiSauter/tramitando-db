import mongoose from 'mongoose'
import { Schema } from 'zod'

const userSchema = new Schema({
    ci : {
        required : true,
        type : Number,
        unique: true
    },
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
    direction: {
        type: String
      },
    phone: {
        type: Number
    },
    photo: {
        type: String
    },
    DistrictAgent: {
      type: Schema.Types.ObjectId,
      ref: 'District'
    },
    NeighborhoodRepresentative: {
      type: Schema.Types.ObjectId,
      ref: 'Neighborhood'
    },
    InstitutionAgent: {
      type: Schema.Types.ObjectId,
      ref: 'Institution'
    }
     }, { timestamps: true })
    
    export default mongoose.model('User', userSchema)
    