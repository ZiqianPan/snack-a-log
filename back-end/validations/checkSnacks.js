const checkName = (req, res, next) => {
  //will cap - words 2 letter an up.
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
  if (req.body.image == null) {
    req.body.image =
      "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image";
    next();
  } else {
    // console.log("img url is all good!")
    next();
  }
};

const confirmHealth = (req) => {

 if (req.body.fiber >= 5 && req.body.added_sugar < 5) {
    return true
} 
 if (req.body.fiber >= 5 && req.body.added_sugar < 5) {
    return true
} 
 if (req.body.protein > 5 && req.body.fiber > 5 && req.body.added_sugar < 5) {
    return true
} 

if (!isNaN(req.body.fiber) || !isNaN(req.body.added_sugar) || !isNaN(req.body.protein) ) {
    return null
} 
 {
    return false
}

}



module.exports = { checkName, checkImage, confirmHealth };
