import mongoose from 'mongoose'

const tramitSchema = new Schema({
    title: {
        required: true,
        type: String
    },
    description: {
        type: String
    },
    tramittype: {
        required : true,
        type: String
    },
    state: {
        required: true,
        type : String
    },
    idUser: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    idInstitution: {
        type: Schema.Types.ObjectId,
        ref: 'Institution'
    },
    idDistrict: {
        type: Schema.Types.ObjectId,
        ref: 'District'
    }
}, { timestamps: true })

export default mongoose.model('Tramit', tramitSchema)