const router = require("express").Router();
const User = require("./User");
const bcrypt = require("bcrypt");
router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(1);
    req.body.password = await bcrypt.hash(req.body.password, salt);
    if(req.body.email==process.env.admin){
      req.body.isAdmin=true;
    }
    await User.create(req.body,(err,result)=>{
      if(err){
        console.log("ERR:"+err);
        res.send({err,msg:"Error Encountered"});
        return;
      }
      res.set('json');
      res.json({result,msg:"Record Inserted"});
    })
  } catch (err) {
    res.status(500).json(err)
  }
});
router.post("/login", async (req, res) => {
  // console.log(JSON.stringify(req.body));
  try {
    const user = await User.findOne({ email: req.body.email });
    if(!user){
      // console.log("User not found");
      return res.status(200).json("User Not Found");
    }
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if(!validPassword){
      // console.log("Login unsuccessfull");
      return res.status(200).json("Wrong password");
    }
    console.log("Login successfull");
    // console.log(user);
    res.status(200).json({user,msg:"Login successfull"});
  } catch (err) {
    res.status(500).json(err)
  }
});

module.exports = router;