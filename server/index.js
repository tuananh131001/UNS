import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import photoRouter from "./routes/photoRouter.js";
import cors from "cors";
const port = process.env.PORT || 5001;
const app = express();

dotenv.config();

// Help Web to see API
app.use(
  cors({
    origin: "*",
  })
);


// Conect to DATABASE
mongoose
  .connect(process.env.DATABASE_URL, { useNewUrlParser: true })
  .then((res) => console.log("CONNECT SUCCESS"))
  .catch((err) => console.log("ERROR:", err));

// Use Routes
app.use(express.json());
app.use("/photo", photoRouter);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
