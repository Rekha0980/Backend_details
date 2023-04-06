const express = require("express")
const { DetailModel } = require("../models/user.model")

const detailRoutes = express.Router()

detailRoutes.get("/", async (req, res) => {
    let detail = await DetailModel.find()
    console.log("get")
    res.send(detail)
})

detailRoutes.get("/:id",async (req, res) => {
    let id = req.params.id;
    const post=await DetailModel.findById(id)
    res.send(post)
})


detailRoutes.post("/add", async (req, res) => {
    const payload = req.body
    try {
        const detail = new DetailModel(payload)
        await detail.save()
        res.send("data added")

    }
    catch (err) {
        console.log({ "err": "error creating details" })
        console.log(err)
    }

})


detailRoutes.delete("/delete/:id", async (req, res) => {
    const id = req.params.id
 try {
        await DetailModel.findByIdAndDelete({ "_id": id })
        res.send("details DELETED")

    }
    catch (err) {
        console.log({ "err": "error deleting node" })
        console.log(err)
    }

})

detailRoutes.patch("/edit/:id",async(req,res)=>{
    const ID=req.params.id
    const payload=req.body
    try{
    await DetailModel.findByIdAndUpdate({_id:ID},payload)
    res.send(`updated detail with this ${ID}`)
    }
    catch(err){
        console.log(err)
        res.send({"err":"something wrong"})
            }
})


module.exports = {
    detailRoutes
}