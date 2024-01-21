module.exports =  middleware=(req,res,next)=>{
    console.log("middleware work")
    if(!req.query.age){
        res.send("what is your age")
    }else if(req.query.age<18){
        res.send("your can not access")

    }
    else{
        next();
    }
}