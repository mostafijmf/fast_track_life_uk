import React from 'react';
import bgBanner from '../../../public/images/SizingAsset-1language.png';

const Articles = () => {
    return (
        <section className='py-5 bg-danger text-white position-relative'>
        <div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
                backgroundImage: `url(${bgBanner})`,
                backgroundSize: '26% auto',
                backgroundPosition: 'center center',
                opacity: '0.1',
                mixBlendMode: 'multiply',
            }}
        />
            <div className="container mt-5">
                <div className='text-center'>
                    <img src="../../../public/images/Fast-Track-Training-logo2.png" alt="" />
                    <h2 className='fw-bold text-white mt-3'>Read Our Reviews</h2>
                    <div className='bg-primary mx-auto' style={{ width: '100px', height: '4px' }}></div>
                </div>

                <div className="row my-5">
                    <div className="col-1"></div>
                    <div className="col-10">
                        <div className="row g-4">
                            <div className="col-lg-3 col-md-6 col-12">
                                <img
                                    src="../../../public/images/FAST-TRACK-TRAINING-BLOG-after-passing-1.jpg.webp"
                                    alt="article"
                                    className='w-100 h-100 object-fit-cover rounded-3'
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img
                                    src="../../../public/images/FAST-TRACK-TRAINING-BLOG-3-top-tips-1.jpg.webp"
                                    alt="article"
                                    className='w-100 h-100 object-fit-cover rounded-3'
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img
                                    src="../../../public/images/FAST-TRACK-TRAINING-BLOG-life-in-the-uk-test-2021-1.jpg.webp"
                                    alt="article"
                                    className='w-100 h-100 object-fit-cover rounded-3'
                                />
                            </div>
                            <div className="col-lg-3 col-md-6 col-12">
                                <img
                                    src="../../../public/images/FAST-TRACK-TRAINING-BLOG-get-permanent.jpg.webp"
                                    alt="article"
                                    className='w-100 h-100 object-fit-cover rounded-3'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-1"></div>
                </div>
            </div>
        </section>
    );
};

export default Articles;