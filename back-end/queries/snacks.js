const db = require("../db/dbConfig.js");

//get all of the snack data.
const getAllSnacks = async () => {
    try {
     const allSnacks = await db.any("SELECT * FROM snacks");
     return allSnacks;
    } catch(err) {
      return err
    } 
}

//get individual snack data.
const getSnack = async (id) => {
    try {
      const oneSnack = await db.one("SELECT * FROM snacks WHERE id=$1", id);
      return oneSnack;
    } catch (error) {
      return error;
    }
  };


  //Create snack 
  const createSnack = async (snack) => {
    const { name, fiber, protein, added_sugar, is_healthy, image} = snack;
    try {
      const newSnack = await db.one(
        "INSERT INTO snacks (name, fiber, protein, added_sugar, is_healthy, image) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
        [name, fiber, protein, added_sugar, is_healthy, image]
      );
      return newSnack;
    } catch (error) {
      return error;
    }
  };

//deleteing a snack
  const deleteSnack = async (id) => {
    try {
      const deletedSnack = await db.one("DELETE FROM snacks WHERE id = $1 RETURNING *", id);
      return deletedSnack;
    } catch (err) {
      return err;
    }
  };

//udpate existing snack
  const updateSnack = async (snack, id) => {
    const { name, fiber, protein, added_sugar, is_healthy, image} = snack;
    try {
    
      const updatedSnack = await db.one("UPDATE snacks SET name = $1, fiber = $2, protein = $3, added_sugar = $4, is_healthy = $5, image = $6 WHERE id = $7 RETURNING *",
      [name, fiber, protein, added_sugar, is_healthy, image, id]);
      console.log(updatedSnack);
      return updatedSnack;

    } catch (err) {
      return err;
    }
  }



module.exports = { getAllSnacks, getSnack, createSnack, deleteSnack, updateSnack };
