const express = require("express")
const cors = require("cors")
const connectDB = require("./config/db")
require("dotenv").config()
// const authRouter = require("./router/auth.routes") // auth oldingi darsdan
const categoryRouter = require("./router/category.routes")
const productRouter = require("./router/products.routes")

const app = express()
app.use(cors())
app.use(express.json())
// rasmlar http://localhost:4001/uploads/... manzilida ochilishi uchun
app.use("/uploads", express.static("uploads"))
const PORT = process.env.PORT || 3000

// router
// app.use("/api/auth", authRouter)
app.use("/api/category", categoryRouter)
app.use("/api/product", productRouter)

connectDB()

app.listen(PORT, () => {
  console.log("Server is running at: " + PORT);
})
