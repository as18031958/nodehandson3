
const express = require("express");
const middleware = require('./middleware.js')
const app = express();
const router = express.Router()

router.use(middleware);

const middleware2 = (req, res, next) => {
  console.log("middleware two is running");
  next();
};

//  Application-level middleware
app.use(middleware2);


router.get("/home", (req, res, next) => {
  res.send("Home page");
});
app.get("/about", (req, res, next) => {
  res.send("about page");
});

app.get("/aboutone",middleware2, (req, res, next) => {
  res.send("about page");
});

 app.use('/',router);

app.listen(5000, () => {
  console.log("server is running fine");
});

