const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const route = require("./routes/login");
const chat = require("./routes/cht");
app.use(bodyParser.urlencoded());

app.use(route.router);
app.use(chat);
app.listen(3000);
