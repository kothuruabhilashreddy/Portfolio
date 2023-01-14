import React from 'react';
import './nav.css';
import * as bootstrap from 'bootstrap/dist/js/bootstrap'
import { useState } from 'react';
const Nav = ({setCurrentPage}) => {
    const [toggleFlag, setToggleFlag]= useState('false');

    const ToggleNav = () => {
        setToggleFlag(!toggleFlag);
        console.log(!toggleFlag);

            const mainNav = document.body.querySelector('#mainNav');
            if (toggleFlag && mainNav) {
                new bootstrap.ScrollSpy(document.body, {
                    target: '#mainNav',
                    offset: 74,
                });
            };
            
            const navbarToggler = document.body.querySelector('.navbar-toggler');
            const responsiveNavItems = [].slice.call(
                document.querySelectorAll('#navbarResponsive .nav-link')
            );
            console.log(responsiveNavItems);
            responsiveNavItems.map(function (responsiveNavItem) {
                responsiveNavItem.addEventListener('click', () => {
                    if (window.getComputedStyle(navbarToggler).display !== 'none' && !toggleFlag) {
                        navbarToggler.click();
                    }
                });
            });
        }
    // const currentPage = (page) => {
    //     setCurrentPage(page);
    // }
  return (
    <div id="page-top">
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
            <div class="container px-4">
                <a class="navbar-brand" href="#page-top" onClick = {() => setCurrentPage('')}><h1>Portfolio</h1></a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={ToggleNav}><span class="navbar-toggler-icon"></span></button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><a class="nav-link" href="#about" onClick = {() => setCurrentPage('')}>About</a></li>
                        <li class="nav-item"><a class="nav-link" href="#contact" onClick = {() => setCurrentPage('')}>Contact</a></li>
                        {/* <li class="nav-item"><a class="nav-link" href="#projects" onClick = {() => setCurrentPage('projects')}>Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="#experience" onClick = {() => setCurrentPage('experience')}>Experience</a></li> */}
                        <li class="nav-item"><a class="nav-link" href="">Projects</a></li>
                        <li class="nav-item"><a class="nav-link" href="">Experience</a></li>
                    </ul>
                </div>
            </div>
        </nav>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="js/scripts.js"></script>
    </div>
  )
}

export default Nav