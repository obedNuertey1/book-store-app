import express from "express";
import BooksController from "../controllers/books-controller";

const router = express.Router();

const booksController = new BooksController();

const ROOT_URL = "api/books";

router.get(`/${ROOT_URL}`, async (_, res)=>{
    await booksController.getAllBooks(_, res);
})

router.post(`/${ROOT_URL}`, async (req, res)=>{
    await booksController.addBook(req, res);
})

router.get(`/${ROOT_URL}/:id`, async (req, res)=>{
    await booksController.getBookById(req, res);
})

router.put(`/${ROOT_URL}/:id`, async (req, res)=>{
    await booksController.updateBook(req, res);
})

export default router;