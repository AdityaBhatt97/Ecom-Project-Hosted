import * as Yup from 'yup'

export const RegisterSchema = Yup.object({
    username : Yup.string().min(4).max(15).required("please enter your username"),
    email : Yup.string().email().required("please enter your email"),
    password : Yup.string().min(6).required("please enter your password")
}) 