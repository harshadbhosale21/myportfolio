import React from 'react'

const About = () => {
    return (
        <>
            <section className="section">
                <div className="sec-hsla">
                    <div className="container my-2">
                        <div className="row gy-4 justify-content-between">
                            <div className="col-12 col-md-5 about-info">
                                <h2 className="text-center text-light">About  <span style={{ color: 'rgb(224, 2, 224)' }}>Me</span></h2>
                                <div className="my-2 text-center text-lg-start">
                                    <p>Hi Everyone, I am <span style={{ color: 'rgb(224, 2, 224)' }}>Harshad Bhosale</span> from <span style={{ color: 'rgb(224, 2, 224)' }}>Pune,India.</span></p>
                                    <p className='my-1'>I am currently gaining valuable experience as a <span style={{ color: 'rgb(224, 2, 224)' }}>Front-End Developer Intern</span> at <span style={{ color: 'rgb(224, 2, 224)' }}>Rego Solutions</span>, where I am honing my skills in <span style={{ color: 'rgb(224, 2, 224)' }}>HTML, CSS, JavaScript</span>, and <span style={{ color: 'rgb(224, 2, 224)' }}>React.js</span>.</p>
                                    <p className='mt-4'>Apart From Coding, some other activities i like to do </p>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 justify-content-center">
                                <img src="/images/abouthead.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
