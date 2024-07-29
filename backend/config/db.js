const mongoose = require('mongoose');

const connectDB = async () =>{
   try{
    await mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
    })
    console.log('Mongodb Connected')
   }catch(error){
    console.log('Mongodb Connection failed', error.message);
   }
}

module.exports = connectDB;