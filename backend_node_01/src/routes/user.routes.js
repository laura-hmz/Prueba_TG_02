const express = require("express");
const userCtrl = require("../controllers/user.controllers");

const router = express.Router();

// create user OK
router.post("/users",userCtrl.createUser);

// get all users OK
router.get("/users",userCtrl.getUsers);

// get a user OK
router.get("/users/:id",userCtrl.getUserId);

// delete a user OK
router.delete("/users/:id",userCtrl.deleteUser);

// update a user OK
router.put("/users/:id", userCtrl.updateUser);

module.exports = router;


