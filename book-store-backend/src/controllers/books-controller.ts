import Book from "../model/Book";

export default class BooksController {
    constructor (){}

    public async getAllBooks(__, res:any){
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

    public async addBook(req:any, res:any){
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
}