import React from 'react'

const Projects = () => {
    return (
        <>
            <section className="section">
                <div className="sec-hsal">
                    <div className="container">
                        <div className="row gy-4 text-center py-2 proj-head">
                            <h2 className="text-light">My Recent <span style={{ color: 'rgb(216, 1, 216)' }}>Works</span></h2>
                            <p className="text-light my-2">Here are some projects that showcase my skills</p>
                        </div>
                        <div className="row gy-4 mt-5 justify-content-center p-1 flex-wrap">
                            <div className="col-12 col-lg-4 text-light py-2 px-4">
                                <div className="project-box py-4 px-3 text-center">
                                    <div className="project-img p-5">
                                        <img src="/images/urbanhive-home.png" className='img-fluid' alt="" />
                                    </div>
                                    <h4>UrbanHive - eCommerce Platform</h4>
                                    <p>Developed an eCommerce Platform with features such as Product listing, Product view, Add to Cart, user authentication</p>
                                    <div className="project-item-btns py-2">
                                        <a className='project-btn mx-2 py-1 px-2 ' href='https://github.com/harshadbhosale21/urbanhive' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/Repo.png" className='img-fluid' alt="" /></span>
                                            Github
                                        </a>
                                        <a className='project-btn mx-2 py-1 px-2' href='https://urbanhive.netlify.app/' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/demo.png" className='img-fluid' alt="" /></span>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 text-light p-2 px-4">
                                <div className="project-box py-4 px-3 text-center">
                                    <div className="project-img p-5">
                                        <img src="/images/resto.png" className='img-fluid' alt="" />
                                    </div>
                                    <h4>HungryHUb</h4>
                                    <p>Designed and Developed a Restuarant Website that showcases the Hospitality, Delicious menu, and various events that are held at their place. It also allows customers to order Online.</p>
                                    <div className="project-item-btns py-2">
                                        <a className='project-btn mx-2 py-1 px-2 ' href='https://github.com/harshadbhosale21/Resto_Web' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/Repo.png" className='img-fluid' alt="" /></span>
                                            Github
                                        </a>
                                        <a className='project-btn mx-2 py-1 px-2' href='https://restowebhb.netlify.app/' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/demo.png" className='img-fluid' alt="" /></span>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 text-light p-2 px-4">
                                <div className="project-box py-4 px-3 text-center">
                                    <div className="project-img p-5">
                                        <img src="/images/chat-app.png" className='img-fluid' alt="" />
                                    </div>
                                    <h4>ChatApp</h4>
                                    <p>Designed and Developed a Realtime Chat application enabling bi-directional communication with the help of Socket.io . Includes features like user-authentication, notification sound</p>
                                    <div className="project-item-btns py-2">
                                        <a className='project-btn mx-2 py-1 px-2 ' href='https://github.com/harshadbhosale21/chat_app' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/Repo.png" className='img-fluid' alt="" /></span>
                                            Github
                                        </a>
                                        <a className='project-btn mx-2 py-1 px-2' href='https://chat-app-1-c55f.onrender.com' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/demo.png" className='img-fluid' alt="" /></span>
                                            Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-lg-4 text-light py-2 px-4">
                                <div className="project-box py-4 px-3 text-center">
                                    <div className="project-img p-5">
                                        <img src="/images/educ.png" className='img-fluid' alt="" />
                                    </div>
                                    <h4>E-Learning Platfrom</h4>
                                    <p>A Centralized online learning platform that offers variety of courses for learners around the world. Build with React.js, Bootstrap for UI and libraraies like Redux and Axios for state management and APIs handling.</p>
                                    <div className="project-item-btns py-2">
                                        <a className='project-btn mx-2 py-1 px-2 ' href='https://github.com/harshadbhosale21/OnlineLearningPlatform' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/Repo.png" className='img-fluid' alt="" /></span>
                                            Github
                                        </a>
                                        <a className='project-btn mx-2 py-1 px-2' href='https://educonnecthb.netlify.app/' target='_blank' rel='noreferrer'>
                                            <span className='px-1'><img src="/images/demo.png" className='img-fluid' alt="" /></span>
                                            Demo
                                        </a>
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

export default Projects;
