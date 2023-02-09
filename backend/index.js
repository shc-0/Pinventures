const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const pinRoutes = require("./routes/pins")

dotenv.config(); 

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connected");
}).catch(err => console.log(err));

app.use("/api/pins", pinRoutes);

app.listen(8800, () => {
    console.log("Backend server is running");
})
