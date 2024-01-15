import { Router } from "express"
import users from "../usersdata.mjs"
import session from "express-session";
const routerUsers = Router();
// middleware
const resolveUserId = (req, res, next) => {
  const { params: { id } } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.status(400).send({ message: "ID must be a number" });
  }

  const userIndex = users.findIndex(user => user.id === parsedId);

  if (userIndex === -1) {
    return res.status(404).send({ message: "User not found" });
  }

  req.userIndex = userIndex;
  next();
};

// building APIs
routerUsers.get('/', (request, response) => {
  response.statusCode = 200;
  response.send({
    message: 'Hello World!'
  });
});

routerUsers.get("/api/users", (request, response) => {
  response.send(users);
});

routerUsers.get("/api/users/:id", resolveUserId, (request, response) => {
  if (isNaN(request.params.id)) {
    response.status(400).send({ message: "ID must be a number" });
  }

  const parsedid = parseInt(request.params.id);
  const user = users.find(user => user.id === parsedid);

  if (user) {
    response.send(user);
  } else {
    response.status(404).send({ message: "User not found" });
  }
});

routerUsers.post("/api/users", (request, response) => {
  const { body } = request;
  const newUser = {
    id: users.length + 1,
    name: body.name
  };

  users.push(newUser);
  response.send({ message: "User created" });
});
routerUsers.put("/api/users/:id", resolveUserId, (request, response) => {
  const { body } = request;
  const { userIndex } = request;

  if (userIndex === -1) return response.status(404).send({ message: "User not found" });

  users[userIndex] = { id: parseInt(request.params.id), ...body };
  response.send({ message: "User updated" });
});

routerUsers.patch('/api/users/:id', resolveUserId, (request, response) => {
  const { body } = request;
  const { userIndex } = request;

  if (userIndex === -1) return response.status(404).send({ message: "User not found" });

  users[userIndex] = { ...users[userIndex], ...body };
  response.send({ message: "User updated" });
});

routerUsers.delete("/api/users/:id", resolveUserId, (request, response) => {
  const { userIndex } = request;
  if (userIndex === -1) return response.status(404).send({ message: "User not found" });

  users.splice(userIndex, 1);
  response.send({ message: "User deleted" });
});

//route to get all users
// Assuming routerUsers is mounted at /api/users
routerUsers.get("/all", (req, res) => {
  console.log(req.session.id)
  console.log(req.session)

  // res.cookie('key', 'value', {
  //   maxAge: 60000 * 60 * 2
  // })
  // if (users.length === 0) {
  //   return res.send({ message: "No users found" });
  // } else {
  //   res.send(users);
  // }
});
export default routerUsers;