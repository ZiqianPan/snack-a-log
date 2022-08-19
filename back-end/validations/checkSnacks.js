const checkName = (req, res, next) => {
  req.body.name = req.body.name.toLowerCase();
  let nameArr = req.body.name.split(" ");

  for (let i = 0; i < nameArr.length; i++) {
    if (nameArr[i].length > 2) {
      nameArr[i] = nameArr[i].charAt(0).toUpperCase() + nameArr[i].slice(1);
    }
  }
  req.body.name = nameArr.join(" ");
  next();
};

const checkImage = (req, res, next) => {
  if (!req.body.image) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    next();
  } else {
    next();
  }
};

module.exports = { checkName, checkImage };
