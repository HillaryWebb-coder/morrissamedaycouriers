import React from 'react';

interface RequestProps {
    showRequestForm: boolean,
    setShowRequestForm(): any
}

const Request: React.FC<RequestProps> = () => {
    return (
        <section className="calculate pt-100">
            <div className="theme-container container">
                <span className="bg-text right wow fadeInUp"> Request </span>
                <div className="row">
                    <div className="col-md-6 text-center">
                        <img src="/Courier-Man.png" alt="morrissameday couriers" className="wow slideInLeft" />
                    </div>
                    <div className="col-md-6">
                        <div className="pad-10"></div>
                        <h2 className="section-title pb-10 wow fadeInUp" > Request a quote </h2>
                        <p className="fs-16 wow fadeInUp">Lorem ipsum dolor sit amet, consectetuer adipiscing elit nonummy nibh
                            euismod tincidunt ut laoreet.</p>
                        <div className="calculate-form">
                            <form className="row">
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3">
                                        <label className="title-2"> height (cm): </label>
                                    </div>
                                    <div className="col-sm-9">
                                        <input type="text" placeholder="" className="form-control" /> 
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> width (cm): </label>
                                    </div>
                                    <div className="col-sm-9"> 
                                        <input type="text" placeholder="" className="form-control" /> 
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> depth (cm): </label>
                                    </div>
                                    <div className="col-sm-9"> 
                                        <input type="text" placeholder="" className="form-control" /> 
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3"> 
                                        <label className="title-2"> weight (kg): </label>
                                    </div>
                                    <div className="col-sm-9"> 
                                        <input type="text" placeholder="" className="form-control" /> 
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3"> <label className="title-2"> location: </label></div>
                                    <div className="col-sm-9">
                                        <div className="col-sm-6 no-pad">
                                            <input type="text" placeholder="From" className="form-control from fw-600" />
                                        </div>
                                        <div className="col-sm-6 no-pad">
                                            <input type="text" placeholder="To" className="form-control to fw-600" />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-3"> <label className="title-2"> Package: </label></div>
                                    <div className="col-sm-9">
                                        <div className="form-group">
                                            <select className="selectpicker form-control" data-live-search="true" data-width="100%"
                                                data-toggle="tooltip" title="select your package">
                                                <option>Option 1</option>
                                                <option>Option 2</option>
                                                <option>Option 3</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group wow fadeInUp">
                                    <div className="col-sm-9 col-xs-12 pull-right">
                                        <div className="btn-1"> <span> Total Cost: </span> <span className="btn-1 dark"> $150 </span>  </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="pt-80 hidden-lg"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Request;