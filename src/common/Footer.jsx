import React from 'react'
import './footer.css';
import { FaFacebookF, FaLinkedinIn,FaInstagram,FaSkype,FaWhatsapp} from "react-icons/fa";
export default function Footer() {
  return (
   <footer className=" container-fluid">
         <div className="container">
            <div className="row text-center">
                <div className="col-lg-12">
                    <h3>My<span className='text-light'>Profile</span></h3>
                    <p className='text-light'>Consectetur adipiscing elit, sed do eiusmod tempor<br/>
                     ididunt ut labore et dolore magna aliqua.</p>
                    <p  className='text-light fs-4'>Contact Me on</p>
                    <h2>Hireme@myprofile.com</h2>
                    <div className="bottom_icons_main d-flex justify-content-center mt-4">
                        <div className="bottom_icon">
                            <span><FaFacebookF/> </span>
                        </div>
                        <div className="bottom_icon">
                            <span><FaLinkedinIn/> </span>
                        </div>
                        <div className="bottom_icon">
                            <span><FaInstagram/> </span>
                        </div>
                        <div className="bottom_icon">
                            <span><FaSkype/> </span>
                        </div>
                        <div className="bottom_icon">
                            <span><FaWhatsapp/> </span>
                        </div>
                    </div>
                </div>
            </div>
         </div>
   </footer>
  )
}
