const express = require("express");

const router = express.Router();

const users = [];

router.get("/", (req, res, next) => {
    res.render("add-user", {
      pageTitle: "Add Users",
      path: "add-user"
    });
});

router.post("/add-user", (req, res, next) => {
    console.log(req.body);
    users.push({ name: req.body.name });
    res.redirect("/users");
});

exports.routes = router;
exports.users = users;
