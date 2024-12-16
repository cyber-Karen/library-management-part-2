import Joi from 'joi';

export const borrowValidationSchema = Joi.object({
    bookId: Joi.string().required().messages({
        'any.required': 'Book ID is required',
        'string.base': 'Book ID must be a string',
    }),
    userId: Joi.string().required().messages({
        'any.required': 'User ID is required',
        'string.base': 'User ID must be a string',
    }),
    dueDate: Joi.date().greater('now').optional().messages({
        'date.greater': 'Due date must be in the future',
    }),
});