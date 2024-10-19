import Book from "../model/Book";
import {Request, Response} from "express";

export default class BooksController {
    constructor (){}

    public async getAllBooks(__, res:Response){
        console.log("This route will provide all the books");
        let books:any;
        try{
            books = await Book.find();
        }catch(e){
            console.error(e.message);
        }
        if(!books){
            return res.status(404).json({message: "No books found"});
        }
        return res.status(200).json({books});
    }

    public async addBook(req:Request, res:Response){
        console.log("This route will add a book");
        const {name, author, description, price, available} = req.body;
        let book:any;
        try{
            book = new Book({name, author, description, price, available});
            await book.save();
        }catch(e){
            console.error(e.message);
        }
        
        if(!book){
            return res.status(500).json({message: "Failed to add book"});
        }
        return res.status(201).json({book});
    }

    public async getBookById(req:Request, res:Response){
        console.log("This route will get a book by id");
        const {id} = req.params;
        let book:any;
        try{
            book = await Book.findById(id);
        }catch(e){
            console.error(e.message);
        }
        if(!book){
            return res.status(404).json({message: "Book not found"});
        }
        return res.status(200).json({book});
    }

    public async updateBook(req:Request, res:Response){
        console.log("This route will update a book");
        const {id} = req.params;
        const {name, author, description, price, available} = req.body;
        let book:any;
        try{
            book = await Book.findByIdAndUpdate(id, {name, author, description, price, available});
        }catch(e){
            console.error(e.message);
        }
        if(!book){
            return res.status(404).json({message: "Unable to update book"});
        }
        return res.status(200).json({book});
    }

    public async deleteBook(req:Request, res:Response){
        console.log("This route will delete a book");
        const {id} = req.params;
        let book:any;
        try{
            book = await Book.findByIdAndDelete(id);
        }catch(e){
            console.error(e.message);
        }
        if(!book){
            return res.status(404).json({message: "Unable to delete book"});
        }
        return res.status(200).json({message: "Book deleted successfully"});
    }

}