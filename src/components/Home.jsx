import React from 'react'
import { NavLink } from 'react-router-dom';

const Home = () => {
    return (
        <>
            <section className="section">
                <div className="sec-hsal">
                    <div className="home-sec1">

                        <div className="container d-flex align-items-center">
                            <div className="row gy-4 w-100 justify-content-between">
                                <div className="col-12 col-lg-5 d-flex flex-column text-center text-lg-start justify-content-center ">
                                    <h1 className='text-light home-text pb-4'>Hello There</h1>
                                    <h1 className='text-light home-text'>I'M <span style={{ color: '  rgb(224, 2, 224)', fontWeight: 'bold' }}>HARSHAD BHOSALE</span></h1>
                                    <div className="py-3">
                                        <h2 className='home-text' style={{ color: ' rgb(224, 2, 224)', fontWeight: 'bold' }}>MERN STACK DEVELOPER</h2>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-5 d-flex justify-content-center">
                                    <img src="/images/profilehead.png" alt="" className='img-fluid' width={'80%'} />
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="home-sec2">
                        <div className="container">
                            <div className="row gy-4 justify-content-between">
                                <div className="col-12 col-lg-6">
                                    <h1 className="text-center text-light home-text">LET ME <span style={{ color: '  rgb(224, 2, 224)' }}>INTRODUCE</span> MYSELF</h1>
                                    <div className="intro-info mt-5 text-center text-lg-start">
                                        <p className="text-light py-2 home-text">Passionate about creating dynamic web applications, I've immersed myself in the <span style={{ color: '  rgb(224, 2, 224)', fontWeight: 'bold', fontStyle: 'italic' }}>MERN STACK.</span> </p>
                                        <p className="text-light py-2">Skilled in <span style={{ color: '  rgb(224, 2, 224)', fontWeight: 'bold', fontStyle: 'italic' }}>MongoDB, Express.js, React.js, and Node.js,</span> I thrive on turning ideas into functional and user-friendly solutions.</p>
                                        <p className="text-light py-2">Beyond coding, I'm captivated by emerging technologies and enjoy exploring the endless possibilities they offer.</p>
                                    </div>
                                </div>
                                <div className="col-12 col-lg-4 d-flex justify-content-center">
                                    <img src="/images/emoji-home.svg" alt="" />
                                </div>
                                <div className="container my-2">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="col-12 text-center mt-3 p-4 find-info d-flex flex-column align-items-center">
                                                <h2 className='text-light'> FIND ME ON</h2>
                                                <p>Feel free to <span style={{ color: ' rgb(224, 2, 224)' }}>connect</span> with me</p>
                                                <div className="social-icons my-3 d-flex">
                                                    <NavLink to='https://github.com/harshadbhosale21' className='social-links' target='_blank'><img src="/images/git.png" className='img-fluid mx-3' alt="" /></NavLink>
                                                    <NavLink to='https://www.linkedin.com/in/harshad-bhosale-4b9b37261' className='social-links' target='_blank'><img src="/images/linked.png" className='img-fluid mx-3' alt="" /></NavLink>
                                                    <NavLink to='https://twitter.com/HarshadNBhosale' className='social-links' target='_blank'><img src="/images/twitter.png" className='img-fluid mx-3' alt="" /></NavLink>
                                                    <NavLink to=''><img src="" alt="" /></NavLink>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;
