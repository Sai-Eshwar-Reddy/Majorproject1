const express = require('express');
const app = express();
const mongoose = require('mongoose');
const listing = require('./models/listing.js')

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

app.get("/listingtest",async (req,res)=>{
    let samplelisting = new listing({
        Title : "Beach view villa",
        Description : "It is a very good villa facing beach with a nice white sand beach",
        Price : 6000,
        Location : "Vizag,Rishikonda Beach",
        Country : "India",
    })
    await samplelisting.save();
    console.log("Savings are saved");
    res.send("Success");
})
app.get("/",(req,res)=>{
    res.send("Root");
})
app.listen(3000,()=>{
    console.log("server is running");
});