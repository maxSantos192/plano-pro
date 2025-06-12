import express from "express";
import { router } from "./routes";

const app = express();

app.use(express.json());
app.use("/", router);

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "OK",
    timesTamp: new Date().toISOString(),
    message: "PlanoPro API is running",
  });
});

app.listen(process.env.PORT || 3333, () => {
  console.log(`Server is running on port ${process.env.PORT || 3333}`);
});
