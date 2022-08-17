const checkName = (req, res, next) => {
    console.log("name is being checked");
    if (req.body.name === req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1)) {
        // console.log("we've got a name with First Letter Capitalized!");
        console.log(req.body.name)
        next();
    } else {
        req.body.name = req.body.name.charAt(0).toUpperCase() + req.body.name.slice(1);
        console.log(req.body.name)
        next();
    }
}


const checkImage = (req, res, next) => {
if (req.body.image == null) {
   
    req.body.image = 'https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image';
    next();
    } else {
        console.log("img url is all good!")
        next();
    }
}


module.exports = { checkName, checkImage }