const mongoose = require('mongoose');
const { Schema } = mongoose;

const documentUserSchema = new Schema({

    doc:{
        type:String,
        required:[true, "Selecciona un rol"],

    }
})

const DocumentUser = mongoose.model('document_user', documentUserSchema);

module.exports = DocumentUser;