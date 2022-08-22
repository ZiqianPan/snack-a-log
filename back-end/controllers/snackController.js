const express = require("express");
const snacks = express.Router();

const {
  getAllSnacks,
  getSnack,
  createSnack,
  deleteSnack,
  updateSnack,
} = require("../queries/snacks.js");

const { checkName, checkImage } = require("../validations/checkSnacks");

const confirmHealth = require("../confirmHealth");

snacks.get("/", async (req, res) => {
  const allSnacks = await getAllSnacks();
  if (allSnacks[0]) {
    res.status(200).json({ success: true, payload: allSnacks });
  } else {
    res.status(500).json({ success: false, payload: /not found/ });
  }
});

snacks.get("/:id", async (req, res) => {
  const { id } = req.params;
  const snack = await getSnack(id);
  if (snack.id) {
    res.json({ success: true, payload: snack });
  } else {
    res.status(404).json({ success: false, payload: "not found" });
  }
});

//creating snacks.
snacks.post("/", checkName, checkImage, async (req, res) => {
  const { body } = req;

  body.is_healthy = confirmHealth(body);

  try {
    const snack = await createSnack(body); // making the snack
    if (snack.id) {
      res.json({ success: true, payload: snack });
    } else {
      res.status(404).json({ success: false, payload: "not found" });
    }
  } catch (err) {
    console.log(err);
  }
});

//delete function
snacks.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedSnack = await deleteSnack(id);
  if (deletedSnack.id) {
    res.status(200).json({ success: true, payload: deletedSnack });
  } else {
    res.status(404).json({ success: false, payload: deletedSnack });
  }
});

//update current snack
snacks.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  
  body.is_healthy = confirmHealth(body);
  const updatedSnack = await updateSnack(req.body, id);

  if (updatedSnack.id) {
    res.status(200).json(updatedSnack);
  } else {
    res
      .status(404)
      .json({ error: "Snack could not be updated for some reason...." });
  }
});

module.exports = snacks;
