import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (

        <>
            <nav className="navbar navbar-expand-lg bg-dark nav-hb">
                <div className="container-fluid">
                    <NavLink to='' className='navbar-brand fw-bold hb ms-0 ms-lg-5'>HB.</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-dark navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 px-5">
                            <li class="nav-item">
                                <NavLink className="nav-link text-light nav-link-text nav-a mx-3" aria-current="page" to="/">
                                    <span className='p-1'><img src="/images/home.png" alt="" /></span>
                                    Home
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-light  nav-link-text mx-3 nav-a " aria-current="page" to="/about">
                                    <span className='p-1'><img src="/images/profile.png" alt="" /></span>
                                    About
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-light  nav-link-text mx-3 nav-a" aria-current="page" to="/projects">
                                    <span className='p-1'><img src="/images/proj.png" alt="" /></span>
                                    Projects
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-light  nav-link-text mx-3 nav-a" aria-current="page" to="/resume">
                                    <span className='p-1'><img src="/images/doc.png" alt="" /></span>
                                    Resume
                                </NavLink>
                            </li>
                            <li class="nav-item">
                                <NavLink className="nav-link text-light  nav-link-text mx-3 nav-a" aria-current="page" to="/contact">
                                    <span className='p-1'><img src="/images/phn.png" alt="" /></span>
                                    Contact
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar

