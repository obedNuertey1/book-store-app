import express from "express";
import BooksController from "../controllers/books-controller";

const router = express.Router();

const booksController = new BooksController();

router.get("/", async (_, res)=>{
    await booksController.getAllBooks(_, res)
})

router.post("/", async (req, res)=>{
    await booksController.addBook(req, res);
})

export default router;