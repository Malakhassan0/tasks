const  ObjectId  = require("mongodb").ObjectId
const connect = require("../db/connect.js")
class Task{
  static add=(req,res)=>{
    res.render("add",{
        pageTitle:"Add New Task" })
    }

    static addLogic=(req,res)=>{
        connect(async(err,db)=>{
           if(err) res.render("err404",{pageTitle:"page not found"})
          try{
                req.body.status? req.body.status=true: req.body.status=false
               await db.collection("tasks").insertOne(req.body)
              res.redirect("/")
          }
          catch(e){
            console.log(e.message)
          }
        })

    }

    static showAll=(req,res)=>{
      connect(async(err,db)=>{
            if(err) res.render("err404",{pageTitle:"page not found"})
            try{
                const data = await db.collection("tasks").find().toArray()
                res.render("home",{
                    pageTitle:"All Tasks",
                    data,
                    isEmpty: !data.lenght
                })
            }
            catch(e){
                console.log(e.message)
            }
      })
    }
    // static single=(req,res)=>{
    //     connect(async(err,db)=>{
    //         if(err) res.render("err404",{pageTitle:"page not found"})
    //         try{
    //            const data= await db.collection("tasks").findOne({_id: new ObjectId(req.params.id)})
    //            res.render("single",{
    //             pageTitle:"task",
    //             data,
    //             isEmpty: !data.lenght
    //            })
    //         }
    //         catch(e){
    //             console.log(e.message)
    //         }
    //     })

    // }
    static del= (req,res)=>{
        connect(async(err,db)=>{
            if(err) res.render("err404",{pageTitle:"page not found"})
            try{
                await db.collection.deleteOne({_id: new ObjectId(req.params.id)})
                res.redirect("/")
            }
            catch(e){
                console.log(e.message)
            }
        })
    }
}

module.exports= Task