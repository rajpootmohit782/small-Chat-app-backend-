const express = require("express");
const fs = require("fs");
const { required } = require("nodemon/lib/config");
const router = express.Router();

router.get("/", (req, res, next) => {
  const text = fs.readFileSync("message.txt", "utf-8");
  console.log("inside chat");
  res.send(
    `<div><div>${text}</div><form action='/userchat' method='POST'> <input type='text' placeholder='message' name='message'/> <button type='submit'>Send</button> </form></div>`
  );
});

router.post("/userchat", (req, res, next) => {
  console.log(req.body.message);

  fs.appendFile("message.txt", "user:" + req.body.message + "\n", (err) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.status(200).redirect("/");
    }
  });
});

module.exports = router;
