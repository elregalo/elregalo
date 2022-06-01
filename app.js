import ip from "ip";
import express from "express";
import dotenv from "dotenv";

const app = express();
const PORT = process.env.PORT || 8080;

// middleware
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("views/public/assets/"));

app.get("/", (req, res) => {
  res.render('index')
});

app.listen(PORT, () => {
  console.log(`WEB SERVER STARTED AT: ${ip.address()}:${PORT}`);
});
