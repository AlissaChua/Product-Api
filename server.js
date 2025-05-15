import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import productRoutes from "./routes/product.route.js";

dotenv.config();
const app = express();

app.use(express.json()); // allow accept json data in req.body

app.use("/api/products",productRoutes);

//  res.send("Server is ready"); knhzOhhO8tA2fG5R
//console.log(process.env.MONGO_URI);
app.listen(5000, () => {
    connectDB();
    console.log("Server started at http://localhost:5000");
});