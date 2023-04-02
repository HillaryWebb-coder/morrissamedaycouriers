import Link from 'next/link';
import React from 'react'

interface BreadcrumbsProps {
    pageTitle: string
    pageDesc: string
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({pageTitle, pageDesc}) => {
    return ( 
        <section className="theme-breadcrumb pad-50">                
            <div className="theme-container container ">  
                <div className="row">
                    <div className="col-sm-8 pull-left">
                        <div className="title-wrap">
                            <h2 className="section-title no-margin">{pageTitle}</h2>
                            <p className="fs-16 no-margin">{pageDesc}</p>
                        </div>
                    </div>
                    <div className="col-sm-4">                        
                        <ol className="breadcrumb-menubar list-inline">
                            <li><Link href="/" className="gray-clr">Home</Link></li>                                   
                            <li className="active"><Link href={`/${pageTitle}`}>{pageTitle}</Link></li>
                        </ol>
                    </div>  
                </div>
            </div>
        </section>
     );
}
 
export default Breadcrumbs;