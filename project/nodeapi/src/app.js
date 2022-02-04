const express = require("express");
const morgan = require("morgan");
const postRoutes = require("./routes/post");

const app = express();
const port = 8080;

app.use(morgan("dev"));
app.use("/", postRoutes);

app.listen(port, () => {
    console.info(`Server active on the port ${port}`);
});