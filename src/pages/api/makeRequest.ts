// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

require("dotenv").config()

interface Data {
  firstName: string,
  lastName: string,
  email: string,
  telephone: number,
  locationFrom: string,
  locationTo: string,
  vehicleReq: string
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
      subject: `Request for courier service from ${formData.locationFrom} to ${formData.locationTo}`,
      html: `Hi, I'm ${formData.firstName} ${formData.lastName} and I'm requesting a courier service from and to the above named locations respectively. <br /> Phone number: ${formData.telephone} <br /> Email: ${formData.email}`
    }

    transporter.sendMail(mailData)
    .then((info: any) => console.log(info))
    .catch((error: any) => console.error(error))
  }
  res.status(200).end()
}
