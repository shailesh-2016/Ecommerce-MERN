const { default: mongoose } = require("mongoose")

const db=()=>{
    mongoose.connect(process.env.MONGO_URL)
    .then(()=>{
        console.log("mongo connected.....")
    }).catch((error)=>{
        console.log(error)
    })
    

}
module.exports=db