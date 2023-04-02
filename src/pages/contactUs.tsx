import { useState } from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import Head from "next/head";


const schema = yup.object({
    fullName: yup.string().required("Please enter your full name"),
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    telephone: yup.number().positive("Phone number must be a valid phone number").integer("Phone number must be a valid phone number"),
    message: yup.string().required("Please enter your message")
}).required();

type formData = yup.InferType<typeof schema>

export default function ContactUs () {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<formData>({
        resolver: yupResolver(schema)
    })

    const queryClient = useQueryClient()

    const [requestSent, setRequestSent] = useState(false)
    const [requestError, setRequestError] = useState(false)

    const makeRequest = useMutation({
        mutationFn: (data: formData) => fetch("/api/sendMessage",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }),
        onSuccess: () => {
            queryClient.invalidateQueries()
            setRequestSent(true)
            reset()
        },
        onError: () => {
            setRequestError(true)
        }
    })

    return (
        <>
            <Head>
                <title>Morrissamedaycouriers - Contact Us</title>
            </Head>
            <Header />
            <article>
                <Breadcrumbs pageTitle="contact us" pageDesc=" Get in touch with us easily" />
                <section className="contact-page pad-30">                    
                    <div className="theme-container container">               
                        <div className="row justify-content-between">
                            <div className="col-md-4 col-sm-6 col-md-offset-1">
                                <ul className="contact-detail title-2 pt-50">
                                    <li className="wow fadeInUp"> 
                                        <span>Phone Number:</span> <p className="gray-clr">+44-7501-827381</p> 
                                    </li>
                                    <li className="wow fadeInUp"> 
                                        <span>Email address:</span> <p className="gray-clr"> morris@morrissamedaycouriers.uk</p> 
                                    </li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-sm-6 col-md-offset-1 contact-form">
                                <div className="calculate-form">
                                    <form className="row card px-3 pt-3 pb-5" id="contact-form" onSubmit={handleSubmit((data) => makeRequest.mutate(data))}>
                                        <div className="form-group mt-3">
                                            <div className="col-sm-3"> 
                                                <label className="title-2"> Name: </label>
                                            </div>
                                            <div className=""> 
                                                <input {...register("fullName")} className="form-control" /> 
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <div className="col-sm-3"> 
                                                <label className="title-2"> Email: </label>
                                            </div>
                                            <div className=""> 
                                                <input type="email" {...register("email")} className="form-control" /> 
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <div className="col-sm-3"> 
                                                <label className="title-2"> Phone: </label>
                                            </div>
                                            <div className=""> 
                                                <input type="tel" {...register("telephone")} className="form-control" /> 
                                            </div>
                                        </div>
                                        <div className="form-group mt-3">
                                            <div className="col-sm-3"> 
                                                <label className="title-2"> Message: </label>
                                            </div>
                                            <div className=""> 
                                                <textarea className="form-control" {...register("message")} cols={25} rows={3}></textarea> 
                                            </div>
                                        </div>                                  
                                        <div className="form-group mt-5">
                                            {requestSent && <p className="alert alert-success">Your message has been sent successfully</p>}
                                    {requestError && <p className="alert alert-error">Your request could not be completed at this time, please try again shortly</p>}
                                            <div className=" col-xs-12 pull-right"> 
                                                <button name="submit" id="submit_btn" className="btn-1"> send message </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="map pt-80">
                    <div className="map-canvas">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2367.9325902406704!2d-2.229615334707395!3d53.59466441378395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bbb0676c525a3%3A0xe2a50fb027ebf9f5!2sGeorge%20St%2C%20Heywood%20OL10%204PW!5e0!3m2!1sen!2suk!4v1679751434580!5m2!1sen!2suk" width="600" height="450" style={{ border:0, width: '100%' }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </section>
            </article>
            <Footer />
        </>
    )
}