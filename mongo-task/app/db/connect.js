const MongoClient= require("mongodb").MongoClient

console.log(process.env.dbName)

const myConnection=(cb)=>{
         MongoClient.connect(process.env.dbURL,(err,client)=>{
            if(err) cb(err,null)
            const db = client.db(process.env.dbName)
            cb(null,db)
         })
}
module.exports= myConnection