const express = require("express");
const router = express.Router();

const {
  createTrade,
  getAllTrades,
  getTradeById,
  getTradesByUser,
  updateTrade,
  deleteTrade,
} = require("../controllers/tradeHistoryController");

// Create
router.post("/", createTrade);

// Read
router.get("/", getAllTrades);
router.get("/user/:userId", getTradesByUser);
router.get("/:id", getTradeById);

// Update
router.put("/:id", updateTrade);

// Delete
router.delete("/:id", deleteTrade);

module.exports = router;