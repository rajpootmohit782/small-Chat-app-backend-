const text = require("body-parser/lib/types/text");
const express = require("express");

const router = express.Router();
let username = "";
router.get("/login", (req, res, next) => {
  console.log("inside login");
  res.send(
    "<form action= '/loginUser' method='POST'> <input type='text' placeholder='username' name='user'/> <button type='submit'>Login</button> </form>"
  );
});

router.post("/loginUser", (req, res, next) => {
  console.log(req.body);
  username = req.body.user;
  console.log(username);
  res.redirect("/");
});
//module.exports = router;
module.exports = { username, router };
