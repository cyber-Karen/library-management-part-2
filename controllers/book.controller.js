import { BookService } from "../services/book.service.js";

export class BookController {
    async creteBook(req, res) {
        try {
            const newBook = await BookService.createBook(req.query);
            res.status(201).json(newBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }

    }

    async getAllbooks (){
        try {
            const books = await BookService.getAllbooks(req.query);
            res.status(200).json(books);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async getBookById (){
        try {
            const book = await BookService.getBookById(req.params.bookId);
            if (!book) {
                return res.status(404).json({ error: 'Book not found' })
            }
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async updateBook (){
        try {
            const updatedBook = await BookService.updateBook(req.params.bookId, req.body);
            if (!updatedBook) {
                return res.status(404).json({ error: 'Book not found' })
            }
            res.status(200).json(updatedBook);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteBook() {
        try {
            const deleteBook = await BookService.deleteBook(req.params.bookId);
            if (!deleteBook) {
                return res.status(404).json({ error: 'Book not found' })
            }
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

}

