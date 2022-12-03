import express from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

import db from "./models";

// Routers
const transRouter = require("./routes/sched_trans");
app.use("/sched_trans", transRouter);

db.sequelize.sync().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});