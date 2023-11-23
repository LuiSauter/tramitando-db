/* eslint-disable indent */
import mongoose, { Schema } from 'mongoose'

const descriptionTramitSchema = new Schema({
    title: {
        required: true,
        type: String,
        unique: true
    },
    description: {
        type: String
    },
    requirement: {
        type: String
    },
    precio: {
        type: Number,
        required: true
    },
    tramits: [{
        type: Schema.Types.ObjectId,
        ref: 'Tramit'
    }]
},
    { timestamps: true })

export default mongoose.model('DescriptionTramit', descriptionTramitSchema)
