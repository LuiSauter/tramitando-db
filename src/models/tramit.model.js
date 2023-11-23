/* eslint-disable indent */
import mongoose, { Schema } from 'mongoose'

const tramitSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    dependencies: {
        type: String,
        required: true
    },
    location: {
        type: String
    },
    state: {
        required: true,
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
    }
},
    { timestamps: true })

export default mongoose.model('Tramit', tramitSchema)
