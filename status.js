const router = require("express").Router();
const Bus = require("./Bus");
router.post("/set", async (req, res) => {
  try {
    await Bus.create(req.body,(err,result)=>{
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
router.post("/checkStatus", async (req, res) => {
     const status = await Bus.findOne({ _id:"63b85066eefa276473824d50" });
     const { seatNumber}=req.body;
    //  console.log(status.seatStatus[seatNumber-1]);
    res.send({status,msg:status.seatStatus[seatNumber-1]});

  });
  router.put("/book", async (req, res) => {
    await Bus.findOne({ _id:"63b85066eefa276473824d50" })
    .then(async (result,err)=>{
            const { seatNumber}=req.body;
            const { seatStatus }=result;
            if(seatStatus[seatNumber-1]==false){
                seatStatus[seatNumber-1]=true;
                await Bus.updateOne({_id:"63b85066eefa276473824d50" },{$set:{seatStatus:seatStatus}});
                res.send({result,msg:true});
            }
            else{
                res.send({err,msg:false});
            }
    })
    .catch(err=>{
        console.log(err);
    })  

 });
 router.put("/admin", async (req, res) => {
  await Bus.findOne({ _id:"63b85066eefa276473824d50" })
  .then(async (result,err)=>{
              const { seatNumber}=req.body;
              const { seatStatus }=result;
              seatStatus[seatNumber-1]=!seatStatus[seatNumber-1];
              console.log(seatStatus[seatNumber-1]);
              await Bus.updateOne({_id:"63b85066eefa276473824d50" },{$set:{seatStatus:seatStatus}});
              res.send({result,msg:true});
  })
  .catch(err=>{
      console.log(err);
  })  

});
module.exports = router;