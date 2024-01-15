import express from 'express';
import router from './routes/index.mjs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import users from './usersdata.mjs';
import passport from 'passport';

const app = express();
const secretKey = 'yourSecretKey'; // Replace 'yourSecretKey' with a secure random string

app.use(express.json());
app.use(cookieParser());
app.use(session({
  secret: secretKey,
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 60000 * 60 * 2
  }
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {


  res.cookie('key', 'value', {
    maxAge: 60000 * 60 * 2
  });
  res.send({ message: 'Hello World!' });
});



