import mongoose from "mongoose";

export const dbConnection = ()=>{
    mongoose.connect(process.env.MONGO_URI,{
        dbName: "Gym-Fitness"
    })
    .then(() => {
        console.log("Connected to Database!");
    })
    .catch((err) => {
        console.log(`some Error occured while connecting to database : ${err}`);
    });
};