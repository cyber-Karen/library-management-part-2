import Joi from 'joi';

export const userValidationSchema = Joi.object({
    name: Joi.string().trim().required().messages({
        'any.required': 'Name is required',
        'string.empty': 'Name cannot be empty',
    }),
    email: Joi.string().email().required().messages({
        'any.required': 'Email is required',
        'string.email': 'Invalid email format',
    }),
    password: Joi.string().min(6).required().messages({
        'any.required': 'Password is required',
        'string.min': 'Password must be at least 6 characters long',
    }),
    role: Joi.string().valid('admin', 'guest').default('guest').messages({
        'any.only': 'Role must be either admin or guest',
    }),
});