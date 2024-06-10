import React from 'react';


import resume from '../docs/Bhosale-Harshad-CV.pdf.pdf';

const Resume = () => {


    return (
        <div>
            <section className="section">
                <div className="sec-hsla">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-lg-12 text-center py-5">
                                <a className="btn btn-primary" href={resume} download='Bhosale-Harshad-CV'>Download CV</a>
                            </div>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-12 text-center">
                                <div className="frame">
                                    <img src="/images/resume.jpg" className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row gy-4">
                            <div className="col-lg-12 text-center py-5">
                                <a className="btn btn-primary" href={resume} download='Bhosale-Harshad-CV'>Download CV</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Resume;
