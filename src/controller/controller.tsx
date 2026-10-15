import { Express } from 'express';

let users = [
  { id: 1, name: "Alice", email: "alice@example.com" },
  { id: 2, name: "Bob", email: "bob@example.com" },
];

const setUpApiRoutes = (app: Express) => {

  app.get("/", (req, res) => {
    res.json({ message: "Welcome to the Node.js REST API" });
  });

  // GET: Get all users
  app.get("/api/users", (req, res) => {
    res.json(users);
  });

  const body = require('body-parser');
  app.use(body.json());

}

export default setUpApiRoutes