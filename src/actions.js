"use server"
import { Resend } from "resend"
import EmailTemplate from "./components/EmailTemplate"

export const sendEmail = async (formData) => {
   
    try {
        const resend = new Resend(process.env.RESEND_API_KEY)
        await resend.emails.send({
            from: 'Automate Me <customer-request@automate-me.at>',
            to: ['el.touch.shop@gmail.com'],
            subject: "Form Submission",
            html:
        })
        return {
            error: null,
            success: true
        }
    } catch (error) {
        console.log(error)
        return {
            error: (error).message,
            success: false
        }
    }
}