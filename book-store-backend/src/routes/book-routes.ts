import express from "express";
import Book from "../model/Book";
import BooksController from "../controllers/books-controller";

const router = express.Router();

const booksController = new BooksController();

router.get("/", async (_, res)=>{
    await booksController.getAllBooks(_, res)
})

export default router;