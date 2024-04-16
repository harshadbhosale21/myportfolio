import React from 'react'

const Contact = () => {
    return (
        <>
            <section className="section">
                <div className="sec-hsla">
                    <div className="container">
                        <div className="row gy-4 text-center py-2 proj-head">
                            <h2 className="text-light">CONTACT <span style={{ color: 'rgb(216, 1, 216)' }}>ME</span></h2>
                            <p className="text-light my-2">Get in Touch</p>
                        </div>
                        <div className="row gy-4 my-4">
                            <div className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center p-4">
                                <div className="contact-item text-start bg-secondary px-4 w-75 my-3">
                                    <img src="" alt="" />
                                    <h3 className="text-light">Phone</h3>
                                    <p className="text-light">+91 9607357911</p>
                                </div>

                                <div className="contact-item text-start bg-secondary px-3 w-75 my-3">
                                    <img src="" alt="" />
                                    <h3 className="text-light">Email</h3>
                                    <p className="text-light mb-1">bhosaleharshad081@gmail.com</p>
                                    <p className="text-light">hbharsh77@gmail.com</p>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 p-4 ">
                                <form action="">
                                    <div className="row gy-4 justify-content-between">
                                        <div className="col-12 d-flex flex-column align-items-center">
                                            <div className="form-floating mb-3 w-75">
                                                <input type="text" className="form-control" id="floatingInput" placeholder='Abc' />
                                                <label htmlFor="floatingInput" >Enter Your Name </label>
                                            </div>
                                            <div className="form-floating mb-3 w-75">
                                                <input type="text" className="form-control" id="floatingInput" placeholder='Abc@gmail.com' />
                                                <label htmlFor="floatingInput" >Enter Your Email </label>
                                            </div>
                                            <div className="form-floating mb-3 w-75">
                                                <input type="text" className="form-control" id="floatingInput" placeholder='Abc@gmail.com' />
                                                <label htmlFor="floatingInput" >Enter Subject </label>
                                            </div>
                                            <div class="form-floating mb-3 w-75">
                                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '150px' }}></textarea>
                                                <label for="floatingTextarea2">Message</label>
                                            </div>
                                            <div className="text-center">
                                                <button className="btn btn-success">
                                                    Send Message
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-12 col-lg-5"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact;
