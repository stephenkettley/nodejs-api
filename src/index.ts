import "dotenv/config";
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// get all posts
app.get("/posts", async (req, res, next)=>{

})

// create a post
app.post("/posts", async (req, res, next)=>{

})

// get a post by id
app.get("/posts/:id", async (req, res, next)=>{

})

// update all posts
app.put("/posts/:id", async (req, res, next)=>{

})

// delete all posts
app.delete("/posts/:id", async (req, res, next)=>{

})

// get a post that belong to a user
app.get("/users/:id/posts", async (req, res, next)=>{

})



app.listen(3000, ()=>{
    console.log("App is listening on port 3000...");
    
})
