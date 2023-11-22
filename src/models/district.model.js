import mongoose from 'mongoose'
import { Schema } from 'zod'

const districtSchema = new Schema({
    no : {
        required : true,
        type : Number
    },
    idOwner: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    idMembers: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }],
    neighborhood: [{
      type: Schema.Types.ObjectId,
      ref: 'Neighborhood'
    }]
  }, { timestamps: true })
    
    export default mongoose.model('District', districtSchema)