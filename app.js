const express = require('express');
const app = express();
const mongoose = require('mongoose');

const Mongo_url = "mongodb://127.0.0.1:27017/bookmystay";
async function main()
{
    await mongoose.connect(Mongo_url);
}
main()
.then(()=>{
        console.log("Database connected successfully");
})
.catch((err)=>{
    console.log(err);
});

app.get("/",(req,res)=>{
    res.send("Root");
})
app.listen(3000,()=>{
    console.log("server is running");
});