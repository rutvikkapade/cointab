// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const bcrypt=require('bcrypt')

const mysql = require('serverless-mysql')({
    config: {
      host     : "localhost",
      database : "cointab",
      user     : "root",
      password : "root"
    }
  })
export default async function handler(req, res) {

  
  if(req.method=='POST'){
      bcrypt.hash(req.body["password"], 10).then(hash=>{
        mysql.query('insert into users (username,email,password) values(?,?,?)',[req.body["username"],req.body["email"],hash]).then(result=>{
          res.status(201).json(req.body);
        }).catch(e=>{
          res.status(403).json({"error":e});
        });
      }).catch(e=>{
          console.log(e);
          res.status(409).json({"message from server":"something went wrong"})
      })
      return;
 }
 if(req.method=='PUT'){



  bcrypt.hash(req.body["password"], 10).then(hash=>{
    mysql.query('update users set username=?,password=? where email=?',[req.body["username"],hash,req.body["email"]]).then(result=>{
    res.status(201).json(req.body);
  }).catch(e=>{
    res.status(403).json({"error":e});
  });
  }).catch(e=>{
      console.log(e);
      res.status(409).json({"message from server":"something went wrong"})
  })
  return;
 }
 
mysql.query('select username,email from users where email=?',[req.body["email"]]).then(result=>{
  res.status(200).json(result);
}).catch(e=>{
  res.status(403).json({"error":e});
})
return;

}

