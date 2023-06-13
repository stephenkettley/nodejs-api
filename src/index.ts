import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all posts
app.get("/posts", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

// create a post
app.post("/posts", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

// get a post by id
app.get("/posts/:id", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

// update all posts
app.put("/posts/:id", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

// delete all posts
app.delete("/posts/:id", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

// get a post that belong to a user
app.get("/users/:id/posts", async (req, res, next) => {
  console.log(req.body);
  console.log(req.params);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000...");
});
