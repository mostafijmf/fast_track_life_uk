import React from 'react';

const Courses = () => {
    return (
        <section className='py-5'>
            <div className="container mt-5">
                <div className='text-center'>
                    <img src="../../../public/images/fast-track-life-uk.png" alt="" />
                    <h2 className='fw-bold text-primary mt-3'>Our Courses</h2>
                    <div className='bg-danger mx-auto' style={{ width: '100px', height: '4px' }}></div>
                </div>
                <div className="row align-content-center justify-content-center g-md-0 g-4 mx-lg-5 mt-5 rounded-3 overflow-hidden">
                    <div className="col-md-3 col-8 bg-danger text-white p-4">
                        <img src="../../../public/images/A01.svg" alt="" width={54} />
                        <h5 className='fw-bold pt-3 pb-2'>A1 ENGLISH TRAINING</h5>
                        <p>Suitable for initial entry into the UK and for Spouse Visa.</p>
                        <a href="#" className='fw-medium text-white text-decoration-none'>Learn More<i className="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                    <div className="col-md-3 col-8 bg-primary text-white p-4">
                        <img src="../../../public/images/B01.svg" alt="" width={54} />
                        <h5 className='fw-bold pt-3 pb-2'>A1 ENGLISH TRAINING</h5>
                        <p>Suitable for initial entry into the UK and for Spouse Visa.</p>
                        <a href="#" className='fw-medium text-white text-decoration-none'>Learn More<i className="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                    <div className="col-md-3 col-8 bg-danger text-white p-4">
                        <img src="../../../public/images/A02.svg" alt="" width={54} />
                        <h5 className='fw-bold pt-3 pb-2'>A1 ENGLISH TRAINING</h5>
                        <p>Suitable for initial entry into the UK and for Spouse Visa.</p>
                        <a href="#" className='fw-medium text-white text-decoration-none'>Learn More<i className="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                    <div className="col-md-3 col-8 bg-primary text-white p-4">
                        <img src="../../../public/images/Training.svg" alt="" width={54} />
                        <h5 className='fw-bold pt-3 pb-2'>A1 ENGLISH TRAINING</h5>
                        <p>Suitable for initial entry into the UK and for Spouse Visa.</p>
                        <a href="#" className='fw-medium text-white text-decoration-none'>Learn More<i className="fa-solid fa-arrow-right ms-2"></i></a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Courses;