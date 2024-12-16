import Joi from 'joi';

export const bookValidationSchema = Joi.object({
    title: Joi.string().trim().required().messages({
        'any.required': 'Title is required',
        'string.empty': 'Title cannot be empty',
    }),
    author: Joi.alternatives()
        .try(Joi.string(), Joi.array().items(Joi.string()))
        .required()
        .messages({
            'any.required': 'Author is required',
            'alternatives.match': 'Author must be a string or an array of strings',
        }),
    genre: Joi.string().trim().required().messages({
        'any.required': 'Genre is required',
        'string.empty': 'Genre cannot be empty',
    }),
    quantity: Joi.number().integer().min(1).required().messages({
        'any.required': 'Quantity is required',
        'number.min': 'Quantity must be at least 1',
        'number.base': 'Quantity must be a number',
    }),
});