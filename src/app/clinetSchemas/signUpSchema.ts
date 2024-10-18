import {z} from 'zod';


export const usernameValidation=z
    .string()
    .min(3, 'Username must be atleast 3 characters')
    .max(15, 'Username must be no more than 15 characters')

 
    export const signUpSchema = z.object({
        username:usernameValidation,
        email:z.string().email('Invalid email address'),
        password:z.string().min(6,'Password must be at least 6 characters')
    })