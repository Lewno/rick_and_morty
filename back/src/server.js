require("dotenv").config();
const router = require("./routes/index") 
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const server = express();
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());

server.use("/",router);


server.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`);
})
