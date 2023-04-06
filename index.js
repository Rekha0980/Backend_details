const express = require("express")
require("dotenv").config()
const cors=require("cors")
const { connection } = require("./configs/db")
const { detailRoutes}=require("./routes/users.routes")
const app = express()
app.use(express.json())
app.use(cors())


app.get("/", (req, res) => {
    res.send("homepage")

})

app.use("/details", detailRoutes)

app.listen(process.env.port, async () => {
    try {
        await connection
        console.log("connected to DB")
    }
    catch (err) {
        console.log("error while connected to db")
        console.log(err)
    }
})