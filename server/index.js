const express = require("express");
const app = express();
const port = 3000;
const request = require("request");

app.use(express.static("public"));
app.listen(port, () => {
  console.log(`listening on ${port}`);
});

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

app.get("/screenshots", (req, res) => {
  request(`http://localhost:3002/screenshots`, function(error, response, body) {
    if (error) {
      console.log(error);
    }
    res.send(body);
  });
});

app.get("/videos", (req, res) => {
  request(`http://localhost:3002/videos`, function(error, response, body) {
    if (error) {
      console.log(error);
    }
    res.send(body);
  });
});

//ERIC API
app.get("/reviews", (req, res) => {
  let options = {
    url: "http://localhost:3005/reviews",
    json: true,
    body: req.query
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Cannot get reviews", error);
    }
    res.send(body);
  });
});

app.get("/recent", (req, res) => {
  let options = {
    url: "http://localhost:3005/recent",
    json: true,
    body: req.query
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Cannot get recent", error);
    }
    res.send(body);
  });
});

app.post("/review/vote", (req, res) => {
  const data = {
    post_id: req.body.post_id,
    helpfulness: req.body.helpfulness
  };

  const options = {
    url: "http://localhost:3005/review/vote",
    method: "POST",
    json: true,
    form: data
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Could not get reviews data", error);
    }
    res.send(body);
  });
});

app.get("/reviews/filters", (req, res) => {
  request("http://localhost:3005/reviews/filters", function(
    error,
    response,
    body
  ) {
    if (error) {
      console.error("Could not get languages", error);
    }
    res.send(JSON.parse(body));
  });
});

app.get("/reviews/comments", (req, res) => {
  let options = {
    url: "http://localhost:3005/reviews/comments",
    json: true,
    body: req.query
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Could not get comments", error);
    }
    res.send(body);
  });
});

app.post("/reviews/comment", (req, res) => {
  const options = {
    url: "http://localhost:3005/reviews/comment",
    method: "POST",
    json: true,
    form: req.body.data
  };

  request(options, function(error, response, body) {
    if (error) {
      console.error("Could not get reviews data", error);
    }
    res.send(body);
  });
});

app.get("/graphOverall", (req, res) => {
  request("http://localhost:3005/graphOverall", function(
    error,
    response,
    body
  ) {
    if (error) {
      console.error("Could not get graph data", error);
    }
    res.send(JSON.parse(body));
  });
});

app.get("/graphRecent", (req, res) => {
  request("http://localhost:3005/graphRecent", function(error, response, body) {
    if (error) {
      console.error("Could not get graph data", error);
    }
    res.send(JSON.parse(body));
  });
});

//JOYCE API

app.post("/players", (req, res) => {
  request("http://localhost:3004/players", function(error, response, body) {
    if (error) {
      console.error("Could not post", error);
    }
    console.log("posted to players");
    res.send(body);
  });
});
