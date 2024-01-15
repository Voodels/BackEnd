import password from "passport";
import { Strategy } from "passport-local";
import users from "../usersdata.mjs";

password.use((username, password, done) => {
  const user = users.find((user) => user.name === username);
  if (user === undefined) {
    return done(null, false);
    if (user.password !== password) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  }
  if (user.password !== password) {
    return done(null, false);
  }
  return done(null, user);
})
