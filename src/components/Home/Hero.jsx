import React from 'react';
import banner from '../../../public/images/page-LIFE-in-theuk-test-training-backround.jpg';

const Hero = () => {
    return (
        <section
            style={{
                backgroundImage: `url(${banner})`,
                backgroundPosition: 'top center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                transition: 'background 0.3s, border-radius 0.3s, opacity 0.3s'
            }}
            className='w-100 h-auto position-relative'
        >
            <div className="position-absolute top-0 start-0 end-0 bottom-0 overflow-hidden" style={{
                transform: 'rotate(180deg)',
                zIndex: '0'
            }}>
                <svg
                    style={{
                        height: '600px',
                        transform: 'translateX(-50%) rotateY(180deg)',
                        width: 'calc(100% + 1.3px)',
                        position: 'absolute',
                        left: '50%',

                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 100"
                    preserveAspectRatio="none"
                    fill='currentColor'
                >
                    <path className="text-danger" d="M0,6V0h1000v100L0,6z"></path>
                </svg>
            </div>
            <div className="container py-5 z-1 position-relative">
                <div className="row my-3">
                    <div className="col-lg-6 col-12 text-white text-center">
                        <p className='text-uppercase fw-medium m-0'>
                            PASS YOUR HOME OFFICE APPROVED TESTS
                        </p>
                        <h1 className='fw-bold' style={{ fontSize: '60px' }}>
                            99% PASS RATE<br />
                            <span style={{ fontSize: '70px' }}>
                                FIRST TIME
                            </span>
                        </h1>

                        <ul className='list-unstyled pt-5 pb-4'>
                            <li className='fs-5 fw-normal text-white mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 520 520" className='me-2 text-danger' fill='currentcolor'><g id="_6-Check" data-name="6-Check"><path d="m239.987 460.841a10 10 0 0 1 -7.343-3.213l-197.987-214.165a10 10 0 0 1 7.343-16.788h95.3a10.006 10.006 0 0 1 7.548 3.439l66.168 76.124c7.151-15.286 20.994-40.738 45.286-71.752 35.912-45.85 102.71-113.281 216.994-174.153a10 10 0 0 1 10.85 16.712c-.436.341-44.5 35.041-95.212 98.6-46.672 58.49-108.714 154.13-139.243 277.6a10 10 0 0 1 -9.707 7.6z"></path></g></svg>
                                <span>Unlimited online training until you pass</span>
                            </li>
                            <li className='fs-5 fw-normal text-white mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 520 520" className='me-2 text-danger' fill='currentcolor'><g id="_6-Check" data-name="6-Check"><path d="m239.987 460.841a10 10 0 0 1 -7.343-3.213l-197.987-214.165a10 10 0 0 1 7.343-16.788h95.3a10.006 10.006 0 0 1 7.548 3.439l66.168 76.124c7.151-15.286 20.994-40.738 45.286-71.752 35.912-45.85 102.71-113.281 216.994-174.153a10 10 0 0 1 10.85 16.712c-.436.341-44.5 35.041-95.212 98.6-46.672 58.49-108.714 154.13-139.243 277.6a10 10 0 0 1 -9.707 7.6z"></path></g></svg>
                                <span>Suitable for British citizenship</span>
                            </li>
                            <li className='fs-5 fw-normal text-white mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 520 520" className='me-2 text-danger' fill='currentcolor'><g id="_6-Check" data-name="6-Check"><path d="m239.987 460.841a10 10 0 0 1 -7.343-3.213l-197.987-214.165a10 10 0 0 1 7.343-16.788h95.3a10.006 10.006 0 0 1 7.548 3.439l66.168 76.124c7.151-15.286 20.994-40.738 45.286-71.752 35.912-45.85 102.71-113.281 216.994-174.153a10 10 0 0 1 10.85 16.712c-.436.341-44.5 35.041-95.212 98.6-46.672 58.49-108.714 154.13-139.243 277.6a10 10 0 0 1 -9.707 7.6z"></path></g></svg>
                                <span>Professional English Teachers</span>
                            </li>
                            <li className='fs-5 fw-normal text-white mt-2'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 520 520" className='me-2 text-danger' fill='currentcolor'><g id="_6-Check" data-name="6-Check"><path d="m239.987 460.841a10 10 0 0 1 -7.343-3.213l-197.987-214.165a10 10 0 0 1 7.343-16.788h95.3a10.006 10.006 0 0 1 7.548 3.439l66.168 76.124c7.151-15.286 20.994-40.738 45.286-71.752 35.912-45.85 102.71-113.281 216.994-174.153a10 10 0 0 1 10.85 16.712c-.436.341-44.5 35.041-95.212 98.6-46.672 58.49-108.714 154.13-139.243 277.6a10 10 0 0 1 -9.707 7.6z"></path></g></svg>
                                <span>All training materials are included</span>
                            </li>
                        </ul>
                        <div>
                            <button
                                className='fs-5 fw-bold bg-white text-primary rounded-5 border-0'
                                style={{ padding: '15px 40px' }}
                            >
                                Get Information
                                <i className="fa-solid fa-arrow-right ms-2"></i>
                            </button>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div className='w-100 d-flex justify-content-end'>
                            <div className='p-3 rounded-2 text-primary bg-white shadow-lg z-3' style={{ width: 'max-content', transform: 'translateY(50px) translateX(-60px)' }}>
                                <p className='m-0 fw-medium ' style={{ fontSize: '60px', lineHeight: 1 }}>20K+</p>
                                <p className='m-0 fw-medium'>STUDENTS PASSED!</p>
                            </div>
                        </div>
                        <div className='position-relative' style={{ width: '80%' }}>
                            <div className='position-absolute top-0' style={{ left: '-50px' }}>
                                <img src="../../public/images/10years2.png" alt="10 years logo" />
                            </div>
                            <img src="../../public/images/smiling-lady-b1-png-1-1.png" alt="Smiling lady" className='w-100 h-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;