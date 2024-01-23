const router =require('express').Router()


router.get('/',(req,res,next)=>{
  
  res.send("yellow")


  next()
})

module.exports=router