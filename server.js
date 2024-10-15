const data = require("./blog-posts");

const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/api/posts", (req, res) => {
    let { limit, category } = req.query;

    limit = limit ? parseInt(limit) : data.length;

    let filteredPosts = category
      ? data.filter((post) => post.categories.includes(category))
      : data;

    filteredPosts = filteredPosts.slice(0, limit);

    res.json(filteredPosts);
  });

  server.get("/api/posts/:id", (req, res) => {
    const postId = parseInt(req.params.id, 10);

    const post = data.find((post) => post.id === postId);

    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ error: "Post not found" });
    }
  });

  server.all("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, (err) => {
    if (err) throw err;
  });
});
