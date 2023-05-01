const express = require("express");
const app = express();
const cors = require("cors");
const modules = require("./routes/index");
const PORT = process.env.PORT || 8083;

require("dotenv").config();
app.use(cors());
app.use(express.json());

app.use("/api", modules);

app.listen(PORT, () => {
  console.log("Running server" + " " + PORT);
});
