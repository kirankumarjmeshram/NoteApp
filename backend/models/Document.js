const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
    title: {type: String, required:true},
    content: {type: String, required:true},
    owner: {type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    collaborator:[{type:mongoose.Schema.Types.ObjectId, ref:'User'}],
    versionHistory:[
        {
            version: {type:Number, required:true},
            content: {type:String, required:true},
            timestamp:{type:Date, default:Date.now}
        },
    ],
});

const Document = mongoose.model('Document', documentSchema);
module.exports = Document;