const { Router } = require("express")
const { addProduct, getAllProducts, updateProduct, deleteProduct } = require("../controller/products.controller")
const uploads = require("../middleware/upload")

const router = Router()

router.get("/get_all", getAllProducts)
router.post("/add", uploads.single("image"), addProduct)
router.put("/update/:id", uploads.single("image"), updateProduct)
router.delete("/delete/:id", deleteProduct)

module.exports = router
