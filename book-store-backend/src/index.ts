import { config } from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bookRoutes from "./routes/book-routes";


config();

const app = express();
mongoose.connect(process.env.MONGO_URI).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.error(err);
})
app.use("/", (_, __, next)=>{
    // res.send("This is our starting app");
    console.log("This is our starting app");
    next();
})
app.use(cors());
app.use(express.json())


// all books routes
app.use("/", bookRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`);
});

