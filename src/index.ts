import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// get all posts
app.get("/posts", async (req, res, next) => {
  console.log(req.body);
});

// create a post
app.post("/posts", async (req, res, next) => {
  console.log(req.body);
});

// get a post by id
app.get("/posts/:id", async (req, res, next) => {
  console.log(req.body);
});

// update all posts
app.put("/posts/:id", async (req, res, next) => {
  console.log(req.body);
});

// delete all posts
app.delete("/posts/:id", async (req, res, next) => {
  console.log(req.body);
});

// get a post that belong to a user
app.get("/users/:id/posts", async (req, res, next) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("App is listening on port 3000...");
});
