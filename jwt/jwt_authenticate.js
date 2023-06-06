const jwt = require('jsonwebtoken');
require('dotenv').config();

const SECRET = process.env.SECRET;

function admin_authenticate(req,res,next){
    try{
        const token = req.headers.authorization;

        if(token === null){
            res.status(401).json({message:'Not Allowed'})
        }
        jwt.verify(token, SECRET, (err,user)=>{
            if(err){
                res.status(403).json({message:'Access is forbidden'})
            }else if(token && user.role === 1){
                next();
            }
        })
    }catch{
        res.status(500).json({message:'Server Problem'})
    }
   
}

function user_authenticate(req,res,next){
    try{
        const token = req.headers.authorization;

        if(token === null){
            res.status(401).json({message:'Not Allowed'})
        }
        jwt.verify(token, SECRET, (err,user)=>{
            if(err){
                res.status(403).json({message:'Access is forbidden'})
            }else if(token && user.role === 0){
                next();
            }
        })
    }catch{
        res.status(500).json({message:'Server Problem'})
    }
   
}

module.exports = {admin_authenticate, user_authenticate}