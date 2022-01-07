// importing express framework
const express = require("express");

const app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get("/", function (req, res) {
  return res.json({
    message:
      "Github action is not another ci/cd tool but it is automation tool for developers workflows on git",
  });
});

// listen to port 7000 by default
app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running");
});

module.exports = app;
