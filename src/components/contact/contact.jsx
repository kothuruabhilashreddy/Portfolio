import React from 'react';
import './contact.css';

const contact = () => {
    function clearData(){
        document.getElementById('contactForm').reset();
    }
  return (
    <section class="contact-section" id="contact">
            <div class="container px-4 px-lg-5">
                <div class="row gx-4 gx-lg-5 justify-content-center">
                    <div class="col-lg-8 col-xl-6 text-center">
                        <h2 class="mt-0">Let's Get In Touch!</h2>
                        <hr class="divider" />
                        <p class="text-muted mb-5">Ready to start your next project with us? Send us a messages and we will get back to you as soon as possible!</p>
                    </div>
                </div>
                <div class="row gx-4 gx-lg-5 justify-content-center mb-5">
                    <div class="col-lg-6">
                        <form id="contactForm">
                          <div class="form-floating mb-3">
                                <input class="form-control" id="name" type="text" placeholder="Enter your name..." />
                                <label for="name">Full name</label>
                                <div class="invalid-feedback">A name is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="email" type="email" placeholder="name@example.com"  />
                                <label for="email">Email address</label>
                                <div class="invalid-feedback">An email is required.</div>
                                <div class="invalid-feedback">Email is not valid.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890"  />
                                <label for="phone">Phone number</label>
                                <div class="invalid-feedback" >A phone number is required.</div>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." />
                                <label for="message">Message</label>
                                <div class="invalid-feedback" >A message is required.</div>
                            </div>
                            <div class="d-none" id="submitSuccessMessage">
                                <div class="text-center mb-3">
                                    <div class="fw-bolder">Form submission successful!</div>
                                    To activate this form, sign up at
                                    <br />
                                    {/* <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a> */}
                                </div>
                            </div>
                            <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                            <div class="d-grid"><button class="btn btn-primary btn-xl" id="submitButton" type="submit" onClick={()=>{document.getElementById('contactForm').reset();}}>Submit</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default contact