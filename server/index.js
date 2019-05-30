const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

// request("localhost:3001/game", function(error, response, body) {
//   console.log("error:", error);
//   console.log("statusCode:", response && response.statusCode);
//   console.log("body:", body);
// });

//JIMMY API
app.get("/game", (req, res) => {
  request(`http://localhost:3001/game/`, function(error, response, body) {
    if (error) {
      console.log(error);
    }
    res.send(body);
  });
});

//XIN API
app.get("/games/:uid", (req, res) => {
  request(`http://localhost:3002/games/${req.params.uid}`, function(
    error,
    response,
    body
  ) {
    if (error) {
      console.log(error);
    }
    res.send(body);
  });
});

//ERIC API

app.get("/reviews", (req, res) => {
  console.log("getting reviews");
  let options = {
    url: "http://localhost:3005/reviews",
    json: true,
    body: req.query
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Error in reviews", error);
    }
    res.send(body);
  });
});

//need to finish eric api
