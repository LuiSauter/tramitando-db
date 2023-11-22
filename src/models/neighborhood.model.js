import mongoose from "mongoose";
import { Schema } from "zod";

const nbhdSchema = new Schema({
    name:{
        required : true,
        type : String
    },
    idOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
    idUsers: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    idInstitutions: [{
        type: Schema.Types.ObjectId,
        ref: 'Institution'
    }],
    idDistrict: {
        type: Schema.Types.ObjectId,
        ref: 'District'
    }
}, {timestamps: true})

export default mongoose.model('Neighborhodd', nbhdSchema)