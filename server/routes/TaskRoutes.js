const express = require("express");
const router = express.Router();
const { list, create, move, update } = require("../controllers/TaskController");

router.get("/tasks", list);
router.post("/tasks", create);
router.patch("/tasks/:taskId", move);
router.put("/tasks/:taskId", update);

module.exports = router;
