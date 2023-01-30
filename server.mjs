import express from "express";
import next from "next";

const dev = true;
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

server.get("/api/some-route", (req, res) => {
  // return res.redirect('/')
  res.json({ message: "Hello from Express!" });
});

server.get("*", (req, res) => {
  return handle(req, res);
});

app.prepare().then(() => {
  server.listen(3000, () => {
    console.log("> Ready on http://localhost:3000");
  });
});
