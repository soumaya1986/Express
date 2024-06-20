// dependencies
const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

// config
dotenv.config();
const publicDir = path.join(__dirname, "public");
console.log(__dirname);
console.log(__filename);
console.log(path.join(__dirname, "public"));

// intialize application
const app = express();

// routing
// home page
// app.get("/", (req, res) => {
//   //   res.send("<h1>Home Page <h1>");
//   res.sendFile(publicDir + "/index.html", (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("500 server error");
//     } else {
//       console.log("succeeded");
//     }
//   });
// });

// // about page
// app.get("/about", (req, res) => {
//   //   res.send("<h1>About Page <h1>");
//   res.sendFile(publicDir + "/about.html", (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("500 server error");
//     } else {
//       console.log("succeeded");
//     }
//   });
// });

// // contact page
// app.get("/contact", (req, res) => {
//   //   res.send("<h1>Contact Page <h1>");
//   res.sendFile(publicDir + "/contact.html", (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("500 server error");
//     } else {
//       console.log("succeeded");
//     }
//   });
// });

// midleware
const authorize = (req, res, next) => {
  const isAuth = true;
  if (isAuth == true) {
    next();
  } else {
    res.status(401).send("401 not authorize");
  }
};
app.use(authorize);
app.use(express.static(publicDir));

// define port
const port = process.env.PORT || 5000;

// listen to the port
app.listen(port, () => console.log(`server is runnig on port ${port}`));
