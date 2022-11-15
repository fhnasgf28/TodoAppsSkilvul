const express = require('express');
const router = express.Router();



const {
    authenicateToken,
} = require("../middlewares/auth.middleware");


const todo = require("./todo.route");
const users = require("./users.route");



// bikin localHost:3000/todo
router.use("/todos", authenicateToken, todo);
router.use("/users", users);

module.exports = router;