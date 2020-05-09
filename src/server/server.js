const express = require("express");
const data = require("data.js");

const app = express();

app.get("/patients", (request, response) => {
  const { patients } = data;
  console.log(patients);
  response.send();
});

const port = process.env.PORT || 4000;

function onListen() {
  console.log(`Listen on port ${port}`);
}
app.listen(port, onListen);
