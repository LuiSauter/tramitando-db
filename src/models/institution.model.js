import mongoose from "mongoose";
import { Schema } from "zod";

const institutionSchema = new Schema({
    name: {
        required: true,
        type: String
    },
    direction: {
        required: true,
        type : String
    },
    email: {
        type: String
    },
    license: {
        required: true,
        type: String
    },
    idOwner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    idUsers: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
    }],
    idTramits: [{
    type: Schema.Types.ObjectId,
    ref: 'Tramit'
    }],
    idnbhd: [{
        type: Schema.Types.ObjectId,
    }]
}, { timestamps: true})

export default mongoose.model('Institution', institutionSchema)