const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello world from NodeJs API"));

const port = 8080;
app.listen(port, () => {
    console.info(`Server active on the port ${port}`);
});