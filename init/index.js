const mongoose = require('mongoose');
const data = require("./data.js");
const listing = require("../models/listing.js");

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

const initDB = async() =>{
    await listing.deleteMany({});
    await listing.insertMany(data.data);
    console.log("Data was initialized");
};
initDB();

