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
                                    <p className='mt-5'>Apart From Coding, some other activities i like to do </p>
                                    <div className="text-start ps-4">
                                        <p className='my-2'><span><img src="/images/football.png" alt="" className='img-fluid px-2' /></span>Playing Football</p>
                                        <p className='my-2'><span><img src="/images/walk.png" alt="" className='img-fluid px-2' /></span>Travelling</p>
                                        <p className='my-2'><span><img src="/images/sketch.png" alt="" className='img-fluid px-2' /></span>Sketching</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 justify-content-center">
                                <img src="/images/abouthead.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container my-5">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <h2 className='text-light'>Professional <span style={{ color: 'rgb(216, 1, 216)' }}>SkillSet</span></h2>
                            </div>
                        </div>
                        <div className="row gy-4 my-5 justify-content-center">
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/js.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/react.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/njs.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/ejs.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/bt.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/mdb.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/sql.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/ts.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/py.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/java.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/api.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/rd.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/giticon.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container my-3">
                        <div className="row gy-4 text-center">
                            <h2 className='text-light'>Tools I  <span style={{ color: 'rgb(216, 1, 216)' }}>use</span></h2>
                        </div>
                        <div className="row gy-4 my-3 justify-content-center">
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/vs.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item" style={{ backgroundColor: 'rgba(255, 255, 255, 0.4)' }}>
                                <img src="/images/postman.svg" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/github.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/netlify.png" className='img-fluid' alt="" />
                            </div>
                            <div className="col-4 col-md-2 skill-item">
                                <img src="/images/bt.png" className='img-fluid' alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="container mt-5">
                        <div className="row gy-4 text-center ">
                            <h2 className='text-light'>My <span style={{ color: 'rgb(216, 1, 216)' }}>Services</span></h2>
                        </div>
                        <div className="row gy-4 justify-content-center pt-4">
                            <div className="col-12 col-sm-4 p-2 mx-0 mx-lg-2 col-w">
                                <div className="service-item p-4 text-start">
                                    <img src="/images/design.png" alt="" className='img-fluid my-2' />
                                    <h3 className="text-light mb-2 service-text">Web Design</h3>
                                    <p className="text-light service-text pe-2">Crafting visually stunning and user-friendly websites is my passion. With a keen eye for design aesthetics and a focus on user experience, I create websites that not only look great but also engage and captivate users for their UX.</p>

                                </div>
                            </div>
                            <div className="col-12 col-sm-4 p-2 mx-0 mx-lg-2 col-w">
                                <div className="service-item p-4 text-start">
                                    <img src="/images/webd.png" alt="" className='img-fluid my-2' />
                                    <h3 className="text-light mb-2 service-text">Web Developement</h3>
                                    <p className="text-light service-text pe-2">As a MERN stack developer, I specialize in building dynamic and responsive web applications. Leveraging the power of JavaScript, React, Node.js, and MongoDB, I develop robust and scalable solutions tailored to meet your specific needs</p>

                                </div>
                            </div>
                            <div className="col-12 col-sm-4 p-2 mx-0 mx-lg-2 col-w">
                                <div className="service-item p-4 text-start">
                                    <img src="/images/db.png" alt="" className='img-fluid my-2' />
                                    <h3 className="text-light mb-2 service-text">Backend Developed</h3>
                                    <p className="text-light service-text pe-2">Behind every successful web application lies a strong and reliable backend infrastructure. With expertise in server-side technologies like Node.js and database management with MongoDB, I ensure seamless functionality and optimal performance for your web projects.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
