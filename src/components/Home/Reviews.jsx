import React, { useState } from 'react';
import Slider from 'react-slick';


const Reviews = () => {
    const [sliderRef, setSliderRef] = useState(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                }
            }
        ]
    };

    return (
        <section className='py-5'>
            <div className="container mt-5">
                <div className='text-center'>
                    <div className='d-flex justify-content-center text-danger fs-5 pb-2'>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <h2 className='fw-bold text-primary mt-3'>Read Our Reviews</h2>
                    <div className='bg-danger mx-auto' style={{ width: '100px', height: '4px' }}></div>
                </div>

                <div className="row mt-5">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row position-relative">
                            <Slider ref={setSliderRef} {...settings}>
                                <div className='px-2 h-100 w-100'>
                                    <div className='bg-body-secondary rounded-2 p-4 w-100 h-100'>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='d-flex'>
                                                <img src="https://lh3.googleusercontent.com/a/AItbvmmCTipHgsa2DlpIRqQh7abb64b-uIHhPgV_1OyU=s120-c-c-rp-w64-h64-mo-br100" alt="user" className='d-inline-block me-3' width={40} height={40} />
                                                <div>
                                                    <h6 className='m-0'>Marian Berbecila</h6>
                                                    <p className='m-0 opacity-75' style={{ fontSize: '14px' }}>2022-06-29</p>
                                                </div>
                                            </div>
                                            <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="google" className='d-inline-block' width={20} height={20} />
                                        </div>
                                        <div className='d-flex justify-content-start text-warning py-2'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>
                                            After joining the classes for the Gedling Knowledge Test got my certificate within weeks. The teachings are very interactive and
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 h-100 w-100'>
                                    <div className='bg-body-secondary rounded-2 p-4 w-100 h-100'>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='d-flex'>
                                                <img src="https://lh3.googleusercontent.com/a/AItbvmlX6bw-qwHewG410a4l1Tg5jwqiwuRgbQlGdgHD=s120-c-c-rp-w64-h64-mo-br100" alt="user" className='d-inline-block me-3' width={40} height={40} />
                                                <div>
                                                    <h6 className='m-0'>Kelly Luz</h6>
                                                    <p className='m-0 opacity-75' style={{ fontSize: '14px' }}>2021-10-05</p>
                                                </div>
                                            </div>
                                            <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="google" className='d-inline-block' width={20} height={20} />
                                        </div>
                                        <div className='d-flex justify-content-start text-warning py-2'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>
                                            I very happy<br />
                                            Fast track excellent<br />
                                            I passed the first time
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 h-100 w-100'>
                                    <div className='bg-body-secondary rounded-2 p-4 w-100 h-100'>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='d-flex'>
                                                <img src="https://lh3.googleusercontent.com/a/AItbvmnzR09Mw0BgYLJf74C5L1yVwR13qaLNuuDRDDcp=s120-c-c-rp-w64-h64-mo-br100" alt="user" className='d-inline-block me-3' width={40} height={40} />
                                                <div>
                                                    <h6 className='m-0'>Tasawar Hussain</h6>
                                                    <p className='m-0 opacity-75' style={{ fontSize: '14px' }}>2021-09-10</p>
                                                </div>
                                            </div>
                                            <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="google" className='d-inline-block' width={20} height={20} />
                                        </div>
                                        <div className='d-flex justify-content-start text-warning py-2'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>
                                            Good luck everyone who want pass the life and UK test join the fast track training.
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 h-100 w-100'>
                                    <div className='bg-body-secondary rounded-2 p-4 w-100 h-100'>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='d-flex'>
                                                <img src="https://lh3.googleusercontent.com/a/AItbvmnTspN9b1et5nEX7vI_NUDXuwboeUTKcUN_GOo=s120-c-c-rp-w64-h64-mo-br100" alt="user" className='d-inline-block me-3' width={40} height={40} />
                                                <div>
                                                    <h6 className='m-0'>Arijeta Hasani</h6>
                                                    <p className='m-0 opacity-75' style={{ fontSize: '14px' }}>2021-09-10</p>
                                                </div>
                                            </div>
                                            <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="google" className='d-inline-block' width={20} height={20} />
                                        </div>
                                        <div className='d-flex justify-content-start text-warning py-2'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>
                                            Very helpful and friendly staff, I will definitely recommend others.
                                        </p>
                                    </div>
                                </div>
                                <div className='px-2 h-100 w-100'>
                                    <div className='bg-body-secondary rounded-2 p-4 w-100 h-100'>
                                        <div className='d-flex align-items-start justify-content-between'>
                                            <div className='d-flex'>
                                                <img src="https://lh3.googleusercontent.com/a/AItbvmkL90Ewmz5DMhY8KN3o7c2YHm4qDnrchUfzKj_K=s120-c-c-rp-w64-h64-mo-br100" alt="user" className='d-inline-block me-3' width={40} height={40} />
                                                <div>
                                                    <h6 className='m-0'>Elisheva Shalom</h6>
                                                    <p className='m-0 opacity-75' style={{ fontSize: '14px' }}>2021-09-10</p>
                                                </div>
                                            </div>
                                            <img src="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="google" className='d-inline-block' width={20} height={20} />
                                        </div>
                                        <div className='d-flex justify-content-start text-warning py-2'>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p>
                                            I strongly recommend any courses from Fast Track as it was my second course with them after accomplish successfully the life in the UK test
                                        </p>
                                    </div>
                                </div>
                            </Slider>

                            {/* <-- Left button --> */}
                            <button
                                onClick={() => { sliderRef?.slickPrev() }}
                                className='position-absolute btn btn-dark'
                                style={{
                                    top: '50%',
                                    left: '-30px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    width: 'max-content'
                                }}
                            >
                                <i className="fa-solid fa-chevron-left fs-4"></i>
                            </button>

                            {/* <-- Right button --> */}
                            <button
                                onClick={() => { sliderRef?.slickNext() }}
                                className='position-absolute btn btn-dark'
                                style={{
                                    top: '50%',
                                    right: '-30px',
                                    transform: 'translateY(-50%)',
                                    zIndex: 10,
                                    width: 'max-content'
                                }}
                            >
                                <i className="fa-solid fa-chevron-right fs-4"></i>
                            </button>

                        </div>
                        <p className='text-center mt-5'>
                            <strong>Google</strong> rating score: <strong>5.0</strong> of 5,based on <strong>76 reviews</strong>
                        </p>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Reviews;