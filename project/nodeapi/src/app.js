const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyparser = require("body-parser");
const expressvalidator = require("express-validator");
const postRoutes = require("./routes/post");

dotenv.config();
const app = express();
const port = process.env.PORT_API || 8080;
const uriMongoDb = process.env.MONGODB_URI;

mongoose.connect(uriMongoDb).then(() => console.info("DB Connected"));
mongoose.connection.on("error", err => console.error(`DB connection error: ${err.message}`));

app.use(morgan("dev"));
app.use(bodyparser.json());
app.use(expressvalidator());
app.use("/", postRoutes);

app.listen(port, () => {
    console.info(`Server active on the port ${port}`);
});