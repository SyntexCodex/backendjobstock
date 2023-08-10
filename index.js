require('dotenv').config();
const express = require("express")
const app = express();
const mongoose = require('mongoose');
const fs = require("fs");
const { send } = require('process');
const UserModels = require("./models/UserModels");
const ProposalModel = require("./models/ProposalModel")
const JobsModels = require("./models/JobsModels")
const cors = require("cors");
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const port = process.env.PORT 
const privateKey = process.env.PRIVATE_JWT
const dbURL = process.env.DB_URL 
app.use(express.json());
const path = require('path');
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

app.use(
    cors({
      origin: "*",
      optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
    })
  );


app.get("/test", (request, response) => {
    response.send("its Working fine")
  })




mongoose.connect(dbURL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
}).catch((error) => {
  console.log("Error connecting to MongoDB:", error);
});

// Define your routes here

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});