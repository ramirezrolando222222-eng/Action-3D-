import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Action-3D backend running");
});

app.listen(3000, () => console.log("Backend live on port 3000"));
