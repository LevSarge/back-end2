const express = require("express");
const cors = require("cors");
const controller = require("./controller");

const app = express();

app.use(cors());
app.use(express.json());

app.get(controller.getHouses);
app.delete(controller.deleteHouses);
app.post(controller.createHouse);
app.put(controller.updateHouse);
