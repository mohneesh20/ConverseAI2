const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config();
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
// const userRoute=require('./Routes/user.js');
const authRoute=require("./auth");
const statusRoute=require("./status");
mongoose.connect(process.env.DB_STRING, {useNewUrlParser:true,useUnifiedTopology: true}).then(()=>{
    console.log("CONNECTED");
}).catch((err)=>{
    console.log(err);
});
// app.use('/api/user',userRoute);
// app.use('/api/login',(req,res,next)=>{
//     res.send("ON");
//     console.log("next");
//     next();
// })
app.use('/api/auth',authRoute);
app.use('/api/status',statusRoute);
app.listen(process.env.PORT,()=>{
    console.log("SERVER STARTED");
});