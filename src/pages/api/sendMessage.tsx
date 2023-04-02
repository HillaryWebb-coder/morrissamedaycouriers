// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require("dotenv").config()

interface Data {
  fullName: string,
  email: string,
  telephone: number,
  message: string,
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method == "POST"){
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
      port: 587,
      host: "smtp.ionos.co.uk",
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      },
      secure: false,
      secureConnection: true
    })

    const formData: Data = req.body 

    const mailData = {
      from: formData.email,
      to: process.env.MAIL_USER,
      subject: `Message from your website by ${formData.fullName}`,
      html: `${formData.message}`
    }

    transporter.sendMail(mailData)
    .then((info: any) => console.log(info))
    .catch((error: any) => console.error(error))
  }
  res.status(200).end()
}
