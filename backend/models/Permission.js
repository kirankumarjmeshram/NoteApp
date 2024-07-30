const mongoose = require('mongoose');
const permissionSchema = new mongoose.Schema({
    document:{type:mongoose.Schema.Types.ObjectId, ref:'Document', required:true},
    user:{type:mongoose.Schema.Types.ObjectId, ref:'User', required:true},
    accessLevel:{type:String, enum:['read', 'write', 'admin'], required:true}
});

const Permission = mongoose.model('Permission', permissionSchema);
module.exports = Permission;