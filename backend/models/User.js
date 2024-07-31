const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true
    },
    role: {type:String, enum:['admin','editor','viewer'], default:'viewer'}

});

userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.hash(this.password, salt);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;