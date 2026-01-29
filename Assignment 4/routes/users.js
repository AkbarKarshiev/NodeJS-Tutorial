const path = require("path");
const express = require("express");

const addUserData = require("./add-user");

const router = express.Router();

router.get("/users", (req, res, next) => {
    const users = addUserData.users;
    res.render("users", {
      users: users,
      pageTitle: "Users",
      path: "users"
    });
});

module.exports = router;
