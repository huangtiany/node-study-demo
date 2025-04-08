import express from "express";
const app = express();
app.use("*", (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500"); //允许localhost 5500 访问
  next();
});
app.get("/info", (req, res) => {
  res.json({
    code: 200,
  });
});
app.listen(3000, () => {
  console.log("http://localhost:3000");
});
