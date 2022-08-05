const bcrypt=require('bcrypt')
const mysql = require('serverless-mysql')({
    config: {
      host     : "localhost",
      database : "cointab",
      user     : "root",
      password : "root"
    }
  })

export default async function handler(req,res){
    if(req.method=='POST'){
        if(userExists(req.body["email"])){
            if(checkBan(req.body["email"])){
                if(authenticate(req.body["email"],req.body["password"])){
                    res.status(202).json({"authenticate":true});
                    return;
                }else{
                    res.status(401).json({"authenticate":false});
                    return;
                }
            }else{
                res.status(406).json({"authenticate":false});
                return;
            }
        }
        res.status(404).json({"authenticate":false});
        return;
    }
}


async function userExists(email){
    mysql.query('select count(email) from users where email=?',[email]).then(result=>{
        return result;
    }).catch(e=>{
        console.log(e);
        return 0;
    })
}
