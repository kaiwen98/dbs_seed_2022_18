import express from "express";
import cors from "cors";
import transRouter from "./routes/sched_trans.js";
// import trans from "../models/sched_trans";

const app = express();

app.use(express.json());
app.use(cors());


// Routers


app.use("/sched_trans", transRouter);

// db.sequelize.sync().then(() => {
app.listen(5000, () => {
console.log("Server running on port 5000");
});
// });