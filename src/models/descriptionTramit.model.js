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
    dependencie: {
        type: String,
        required: true
    },
    requirement: {
        type: String
    },
    location: {
        type: String
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category'
    },
    subCategory: {
        type: Schema.Types.ObjectId,
        ref: 'SubCategory'
    },
    idDistrict: {
        type: Schema.Types.ObjectId,
        ref: 'District'
    },
    tramits: [{
        type: Schema.Types.ObjectId,
        ref: 'Tramit'
    }]
},
    { timestamps: true })

export default mongoose.model('DescriptionTramit', descriptionTramitSchema)
