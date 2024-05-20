import React from 'react';

const Footer = () => {
    return (
        <footer>
            <section className='bg-primary text-white py-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10">
                            <div className="row g-5">
                                <div className="col-lg-3 col-12">
                                    <ul className='list-unstyled text-start'>
                                        <li><h5 className='fw-bold border-bottom border-1 pb-3'>ABOUT US</h5></li>
                                        <li>
                                            <img src="../../public/images/white-logo-sideways.png" alt="" className='w-100 h-auto d-inline py-3' />
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }}>
                                                Fast Track Training offers A1/ A2/ B1 English and Life in the UK lessons both online on Zoom. We have a 99% pass rate and free retraining if the student fails their exam. Contact us on 01158376502 to get more information.
                                            </p>
                                        </li>
                                        <li>
                                            <div className='d-flex gap-4 mt-4'>
                                                <a href="#" className='text-white'>
                                                    <i className="fa-brands fa-facebook"></i>
                                                </a>
                                                <a href="#" className='text-white'>
                                                    <i className="fa-brands fa-instagram"></i>
                                                </a>
                                                <a href="#" className='text-white'>
                                                    <i className="fa-brands fa-whatsapp"></i>
                                                </a>
                                                <a href="#" className='text-white'>
                                                    <i className="fa-brands fa-youtube"></i>
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <ul className='list-unstyled text-start'>
                                        <li><h5 className='fw-bold border-bottom border-1 pb-3'>AWARD WINNING</h5></li>
                                        <li className='text-center'>
                                            <img src="../../public/images/10-years.png" alt="" className='h-auto d-inline-block py-3 mx-auto' width={60} />
                                        </li>
                                        <li>
                                            <p style={{ fontSize: '14px' }}>
                                                Our award winning college has been helping students pass their citizenship exams in the UK since 2013.  If you cannot pass your exams and need help from a teacher get in contact and we can help you become British.
                                            </p>
                                        </li>

                                    </ul>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <ul className='list-unstyled text-start'>
                                        <li><h5 className='fw-bold border-bottom border-1 pb-3'>QUICK LINKS</h5></li>
                                        <li className='mt-4'>
                                            <a href="#" className='text-white text-decoration-none fw-medium'>CONTACT US</a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" className='text-white text-decoration-none fw-medium'>OUR OFFICES</a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" className='text-white text-decoration-none fw-medium'>CANCELLATION REFUND POLICY</a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" className='text-white text-decoration-none fw-medium'>AFFILIATE AREA</a>
                                        </li>
                                        <li className='mt-3'>
                                            <a href="#" className='text-white text-decoration-none fw-medium'>TERMS CONDITIONS</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3 col-12">
                                    <ul className='list-unstyled text-start'>
                                        <li><h5 className='fw-bold border-bottom border-1 pb-3'>OPENING HOURS</h5></li>
                                        <li className='mt-4'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Monday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Tuesday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Wednesday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Thursday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Friday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Saturday:</strong> 9am – 6pm</p>
                                        </li>
                                        <li className='mt-2'>
                                            <p style={{ fontSize: '14px', margin: '0' }}><strong>Sunday:</strong> 9am – 6pm</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </section>
            <div className='bg-danger text-white'>
                <div className="container py-3">
                    <div className="row">
                        <div className="col-1"></div>
                        <div className="col-10 d-flex flex-lg-row flex-column justify-content-between align-items-center text-lg-start text-center" style={{fontSize: '14px'}}>
                            <p className='m-0 fw-medium'>
                                &copy; {new Date().getFullYear()}  Fast Track Training Worldwide Learning and Tuition
                            </p>
                            <p className='m-0 fw-medium'>
                                Made by
                                <a href="https://mostafijmozumdar.com" className='text-decoration-none text-black ms-2'>Mostafij Mozumdar</a>
                            </p>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;