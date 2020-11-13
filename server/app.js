const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { response } = require("express");

const app = express();
dotenv.config();

const dbService = require("./dbService");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// create
app.post("/insert", (req, res) => {});

//read
app.get("/getAll", (req, res) => {
  const db = dbService.getDbServiceInstance();
  const result = db.getAllData();

  result
    .then(data => response.json({ data: data }))
    .catch(err => console.log(err));
});

//update

//delete

app.listen(process.env.PORT, () =>
  console.log("server running")
);
