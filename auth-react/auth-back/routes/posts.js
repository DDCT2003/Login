const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("post");
});



module.exports = router;