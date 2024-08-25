"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import LogoIcon from '../assets/LogoIcon'; // Adjust the path as necessary

const Footer = () => {
   return (
      <motion.footer layout>
         <section className="footer">
            <div className="container">
               <div className="left">
                  <Link href="/" passHref
                     className="logo">
                     <LogoIcon />
                     <h1><span>Website</span>Vikreta</h1>
                  </Link>
                  <p className="des">
                     Website Vikreta is an answer to all your web development needs. We provide services to whoever needs, from small start-ups to large corporations. Our mission is to fulfill your needs and give you the best service.
                  </p>
               </div>

               <div className="right">
                  <div className="quickLinks">
                     <span className="link">
                        <i className="icon bi bi-chevron-right"></i>
                        <Link href="/">Home</Link>
                     </span>
                     <span className="link">
                        <i className="icon bi bi-chevron-right"></i>
                        <Link href="#aboutus">About Us</Link>
                     </span>
                     <span className="link">
                        <i className="icon bi bi-chevron-right"></i>
                        <Link href="#ourwork">Our Services</Link>
                     </span>
                     <span className="link">
                        <i className="icon bi bi-chevron-right"></i>
                        <Link href="/detailedwork">Our Work</Link>
                     </span>
                     <span className="link">
                        <i className="icon bi bi-chevron-right"></i>
                        <Link href="/contactus">Contact Us</Link>
                     </span>
                  </div>

                  <div className="social-media">
                     <Link href="https://www.instagram.com/websitevikreta/" className='link' target="_blank" rel="noreferrer">
                        <i className="icon bi bi-instagram"></i>&nbsp; instagram
                     </Link>
                     <Link href="https://www.linkedin.com/company/websitevikreta/" target="_blank" rel="noreferrer">
                        <i className="icon bi bi-linkedin"></i>&nbsp; linkedin
                     </Link>
                     <Link href="https://www.upwork.com/agencies/websitevikreta/" className='link' target="_blank" rel="noreferrer">
                        <svg fill="#FFD600" width="16px" height="16px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                           <path d="M24.75 17.542c-1.469 0-2.849-0.62-4.099-1.635l0.302-1.432 0.010-0.057c0.276-1.521 1.13-4.078 3.786-4.078 1.99 0 3.604 1.615 3.604 3.604 0 1.984-1.615 3.599-3.604 3.599zM24.75 6.693c-3.385 0-6.016 2.198-7.083 5.818-1.625-2.443-2.865-5.38-3.583-7.854h-3.646v9.484c-0.005 1.875-1.521 3.391-3.396 3.396-1.875-0.005-3.391-1.526-3.396-3.396v-9.484h-3.646v9.484c0 3.885 3.161 7.068 7.042 7.068 3.885 0 7.042-3.182 7.042-7.068v-1.589c0.708 1.474 1.578 2.974 2.635 4.297l-2.234 10.495h3.729l1.62-7.615c1.417 0.906 3.047 1.479 4.917 1.479 4 0 7.25-3.271 7.25-7.266 0-4-3.25-7.25-7.25-7.25z" />
                        </svg>&nbsp;upwork
                     </Link>
                  </div>
                  <div className="line"></div>
                  <p className="copyright">
                     © 2020-24 <span>Website</span>Vikreta.<br className="break" /> All rights reserved
                  </p>
               </div>
            </div>
         </section>
      </motion.footer>
   );
};

export default Footer;
