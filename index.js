const express = require("express");

const app = express();
const port = 3050;

// app.use("/html-time", express.static("public"));
app.use(express.static("src"));
app.use(express.static('dist'));

//set the server to listen at the port
app.listen(port, () => console.log(`Server is listening at port ${port}`));