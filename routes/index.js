const router = require("express").Router();
const products = require("../controller/index")


router.get("/books", products.getAllBooks);
router.get("/books/:id", products.getBooksId);
router.get("/ejs/books", products.ejsAllBooks);


module.exports = router;