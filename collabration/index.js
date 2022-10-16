const express = require("express")
const hbs = require("hbs")
const path = require("path")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT || 3000

const deal = require("./controller/deal.js")
const dbFile = "db/db.json"


const viewsFiles= path.join(__dirname,"front/views")
const layoutFiles= path.join(__dirname,"front/layout")
app.set("view engine", "hbs")
app.set("views", viewsFiles)
hbs.registerPartials(layoutFiles)
/////////////////////////////////////////////////

app.get("/", (req,res)=> {
    const allCustomers = deal.readFromJson(dbFile)
    res.render("home", {
        pageTitle:"Home Page",
        allCustomers
    })
})
app.get("/add", (req,res)=> {
    const allCustomers = deal.readFromJson(dbFile)
    res.render("add", {
        pageTitle:"Add User"
    })
})
app.get("/addMethod", (req,res)=> {
    const customer = {id:Date.now(), ...req.query}
    const allCustomers = deal.readFromJson(dbFile)
    allCustomers.push(customer)
    deal.writeToJson(allCustomers, dbFile)
    res.redirect("/")
})

app.get("/single/:id", (req,res)=> {
    let isFound = true
    const Id = req.params.id
    const allCustomers = deal.readFromJson(dbFile)
    const customerID = allCustomers.find(el=> el.id==Id)
   if (!isFound) return isFound=false
   else{
    res.render("single", {
        pageTitle:"Account",
        customerID,
        isFound
    })
   }
})



app.listen(PORT, ()=>console.log(`http://localhost:${PORT}`))
