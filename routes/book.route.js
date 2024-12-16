import express from 'express';
import { BookController } from '../controllers/book.controller.js';
import { validate } from '../middlewares/validate.middleware.js';
import { bookValidationSchema } from '../validations/book.validation.js';
import { authMiddleware } from '../middlewares/auth.middleware.js';
import { roleMiddleware } from '../middlewares/role.middleware.js';

const router = express.Router();

// Add a book (admin-only)
router.post('/books', authMiddleware, roleMiddleware('admin'), validate(bookValidationSchema), BookController.createBook);

// Get all books
router.get('/books', BookController.getAllBooks);

// Get book by ID
router.get('/books/:id', BookController.getBookById);

// Update a book (admin-only)
router.put(
    '/books/:id',
    authMiddleware,
    roleMiddleware('admin'),
    validate(bookValidationSchema),
    BookController.updateBook
);

// Delete a book (admin-only)
router.delete(
    '/books/:id',
    authMiddleware,
    roleMiddleware('admin'),
    BookController.deleteBook
);

export default router;