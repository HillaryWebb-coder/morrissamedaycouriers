import React, { useState } from "react";
import type { RootState } from "../../store";
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from "../../slices/RequestQuoteSlice";
import styles from "../styles/RequestQuote.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useMutation, useQueryClient} from "@tanstack/react-query";

const schema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    email: yup.string().email("Please enter a valid email address").required("Please enter a valid email address"),
    telephone: yup.number().positive("Phone number must be a valid phone number").integer("Phone number must be a valid phone number").required("Phone number is required"),
    locationFrom: yup.string().required("Please enter a valid location"),
    locationTo: yup.string().required("Please enter a valid location"),
    vehicleReq: yup.string().required("Please select the vehicle you desire")
}).required();

type formData = yup.InferType<typeof schema>

const RequestQuote: React.FC = () => {

    const requestQuote = useSelector((state: RootState) => state.requestQuote);
    const dispatch = useDispatch()
    const queryClient = useQueryClient()

    const {register, handleSubmit, reset, formState: {errors}} = useForm<formData>({
        resolver: yupResolver(schema)
    })

    const [requestSent, setRequestSent] = useState(false)
    const [requestError, setRequestError] = useState(false)

    const makeRequest = useMutation({
        mutationFn: (data: formData) => fetch("/api/makeRequest",{
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
        {requestQuote.isOpen &&  
        <div className={`${styles.modalContainer}`}>
            <div onClick={() => dispatch(toggle())} className={styles.modalBg}></div>
            <section className={`col-md-5 ${styles.modalSection}`}>
                <div className="modal-header justify-content-end">
                    <button type="button" className="btn-close" onClick={() => dispatch(toggle())}></button>
                </div>
                <div className="modal-body">
                    <div>
                        <div className="pad-10"></div>
                        <h2 className="section-title" >Request a quote</h2>
                        <div className="calculate-form">
                            <form className="row" onSubmit={handleSubmit((data) => makeRequest.mutate(data))}>
                                <div className="form-group mt-3">
                                    <div className="col-sm-3">
                                        <label className="title-2"> Firstname: </label>
                                    </div>
                                    <div>
                                        <input {...register("firstName")} className={`form-control ${errors.firstName && `is-invalid`}`} /> 
                                        {errors.firstName && <div className="invalid-feedback">{errors.firstName?.message}</div>}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> Lastname: </label>
                                    </div>
                                    <div> 
                                        <input {...register("lastName")} className={`form-control ${errors.lastName && `is-invalid`}`} /> 
                                        {errors.lastName && <div className="invalid-feedback">{errors.lastName?.message}</div>}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> Email Address: </label>
                                    </div>
                                    <div> 
                                        <input {...register("email")} className={`form-control ${errors.email && `is-invalid`}`} />
                                        {errors.email && <div className="invalid-feedback">{errors.email?.message}</div>}
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> Telephone: </label>
                                    </div>
                                    <div> 
                                        <input type="tel" {...register("telephone")} className={`form-control ${errors.telephone && `is-invalid`}`} />
                                        {errors.telephone && <div className="invalid-feedback">{errors.telephone?.message}</div>}

                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> location: </label>
                                    </div>
                                    <div>
                                        <div className="no-pad">
                                            <input {...register("locationFrom")} placeholder="From" className={`form-control ${errors.locationFrom && `is-invalid`}`} />
                                        {errors.locationFrom && <div className="invalid-feedback">{errors.locationFrom?.message}</div>}
                                        </div>
                                        <div className="no-pad">
                                            <input {...register("locationTo")} placeholder="To" className={`form-control ${errors.locationTo && `is-invalid`}`} />
                                        {errors.locationTo && <div className="invalid-feedback">{errors.locationTo?.message}</div>}

                                        </div>
                                    </div>
                                </div>
                                <div className="form-group mt-3">
                                    <div className="col-sm-9"> 
                                        <label className="title-2"> Vehicle required: </label>
                                    </div>
                                    <div>
                                        <div className="form-group">
                                            <select {...register("vehicleReq")} className={`form-control selectpicker ${errors.vehicleReq && `is-invalid`}`} title="select your vehicle">
                                                <option>Long wheel base van</option>
                                                <option>Luton vans</option>
                                                <option>short wheel base van</option>
                                                <option>small van</option>
                                            </select>
                                        {errors.vehicleReq && <div className="invalid-feedback">{errors.vehicleReq?.message}</div>}

                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 fs-6">By contacting us, you agree to our terms and conditions and privacy policy</p>
                                <div className="form-group mt-3">
                                    {requestSent && <p className="alert alert-success">Thank you for requesting our service, our agent will contact with you shortly</p>}
                                    {requestError && <p className="alert alert-error">Your request could not be completed at this time, please try again shortly</p>}
                                    <div className="pull-right">
                                        <input className="btn-1 w-100 text-center" type="submit" value="send" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="pt-80 hidden-lg"></div>
                    </div>
                </div>
            </section>
        </div>
        }
        </>
     );
}
 
export default RequestQuote;