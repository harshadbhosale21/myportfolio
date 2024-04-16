import React from 'react'
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <footer className='footer bg-dark'>
                <div className="container py-2">
                    <div className="row">
                        <div className="col-12 col-md-4 text-center">
                            <p className='text-light'>Developed By Harshad Bhosale</p>
                        </div>

                        <div className="col-12 col-md-4 text-center">
                            <p className='text-light'> Copywrite © 2024HB</p>
                        </div>

                        <div className="col-12 col-md-4 text-center d-flex justify-content-center ">
                            <NavLink to='https://github.com/harshadbhosale21'><img src="/images/repo.png" className='img-fluid p-2' alt="" /></NavLink>
                            <NavLink to='https://www.linkedin.com/in/harshadbhosale21'><img src="/images/lik.png" className='img-fluid p-2' alt="" /></NavLink>
                            <NavLink to='https://twitter.com/HarshadNBhosale'><img src="/images/tw.png" className='img-fluid p-2' alt="" /></NavLink>
                            <NavLink to='https://www.instagram.com/bhosaleharshad_'><img src="/images/insta.png" className='img-fluid p-2' alt="" /></NavLink>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;
