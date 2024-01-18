import React from 'react'
import './header.css'
import { FaAngleDown } from "react-icons/fa6";
import { IoSearchSharp } from "react-icons/io5";

export default function Header() {
    return (
        <>
            {/* // ------------------------header top start-------------------- */}
            <div className='header_top bg-dark text-light d-none d-xl-block'>
                <div className="container px-0 m-0">
                    <div className="header_top_left row ">
                        <div className="col-lg-6">
                            <ul className='list-inline m-0 d-flex'>
                                <li>
                                    <a className='nav-link' href="#">Students <FaAngleDown /></a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#"> Families <FaAngleDown /></a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#">Faculty and Staff  <FaAngleDown /></a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#">Alumni <FaAngleDown /></a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <ul className='list-inline m-0 d-flex'>
                                <li>
                                    <a className='nav-link fw-medium' href="#">VISIT APPLY GIVE | </a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#"> News</a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#">Calendar</a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#">Careers</a>
                                </li>
                                <li>
                                    <a className='nav-link' href="#">People</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* // ----------------------header midel section-------------------------------- */}
            <div className="container-fluid header_midel_part">
                <div className="container">
                    <div className="row">
                        <nav class="navbar navbar-expand-lg">
                            <div class="container-fluid">
                                <a class="navbar-brand fw-bold fs-3" href="#">Brainiacs Institute</a>
                                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                                    <form class="d-flex" role="search">
                                        <input className='p-1 position-relative' type="text" placeholder='Search the Site' />
                                        <span className='fs-4 cursor-pointer position-absolute end-0'><IoSearchSharp /></span>
                                    </form>
                                </div>
                            </div>
                        </nav>
                        {/* -------------------- mobile menu start------------------- */}
                        <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                            <div class="offcanvas-header">
                                <h5 class="offcanvas-title" id="offcanvasExampleLabel">Brainiacs Institute</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                            </div>
                            <div class="offcanvas-body">
                                <div>
                                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li>
                                            <a className='nav-link' href="#">Students <FaAngleDown /></a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#"> Families <FaAngleDown /></a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#">Faculty and Staff  <FaAngleDown /></a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#">Alumni <FaAngleDown /></a>
                                        </li>
                                        <li>
                                            <a className='nav-link fw-medium' href="#">VISIT APPLY GIVE </a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#"> News</a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#">Calendar</a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#">Careers</a>
                                        </li>
                                        <li>
                                            <a className='nav-link' href="#">People</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* -------------------- mobile menu end------------------- */}

                    </div>
                </div>
            </div>
            {/* // ----------------------header midel section-------------------------------- */}
            <div className="header_bottom_part container-fluid">
                <div className="container">
                    <div className="row">
                        <ul className='d-lg-flex d-none list-inline'>
                            <li>
                                <a className='nav-link' href="#">About Brainiacs <span><FaAngleDown /></span></a>
                            </li>
                            <li>
                                <a className='nav-link' href="#">Admission and Aid <span><FaAngleDown /></span></a>
                            </li>
                            <li>
                                <a className='nav-link' href="#">Academics <span><FaAngleDown /></span></a>
                            </li>
                            <li>
                                <a className='nav-link' href="#">Life at Brainiacs <span><FaAngleDown /></span></a>
                            </li>
                            <li>
                                <a className='nav-link' href="#">After Brainiacs <span><FaAngleDown /></span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}
