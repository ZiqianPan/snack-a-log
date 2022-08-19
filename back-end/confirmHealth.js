const confirmHealth = (snack) => {
  const { protein, fiber, added_sugar } = snack;

  if (isNaN(fiber) || isNaN(added_sugar) || isNaN(protein)) {
    return null;
  } else if ((protein >= 5 || fiber >= 5) && added_sugar < 5) {
    return true;
  } else {
    return false;
  }
};
//it has to be in this file...
module.exports = confirmHealth;
