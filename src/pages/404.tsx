import Breadcrumbs from "@/components/Breadcrumbs";
import Header from "@/components/Header";
import RequestQuote from "@/components/RequestQuote";
import Head from "next/head";
import Link from "next/link";
import React from "react"
 
const custom404: React.FC = () => {
    return ( 
        <>
            <Head>
                <title>Morrissamedaycouriers - Page not Found</title>
            </Head>
            <Header />
            <RequestQuote />
            <article className="about-page">
                <Breadcrumbs pageTitle="404 error!" pageDesc="something was not correct" />
                <section className="pt-50 pb-120 error-wrap">                    
                    <div className="theme-container container text-center">               
                        <h2 className="section-title no-margin"> 404 </h2>
                        <p className="fs-20">The page you are looking for is not found!<br />
                            Please use the correct link.</p>
                        <h3 className="no-margin pt-10"> <Link href="/" className="title-1"> <i className="arrow_left fs-20"></i> go back to home </Link> </h3>
                    </div>
                </section>
            </article>
        </>
    );
}

export default custom404;