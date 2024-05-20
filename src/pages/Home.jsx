import { Button } from 'react-bootstrap';
import Header from '../components/Header';
import Courses from '../components/Home/Courses';
import Hero from '../components/Home/Hero';
import TrackCourses from '../components/Home/TrackCourses';
import bgBanner from '../../public/images/Screen-Shot-2022-06-17-at-19.12.06.jpg';
import Reviews from '../components/Home/Reviews';
import Articles from '../components/Home/Articles';
import Footer from '../components/Footer';

const Home = () => {
    return (<>
        <Header />
        <main>
            <Hero />
            <section className='py-5 bg-body-tertiary'>
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-4 col-12 text-center">
                            <a href="#">
                                <img src="../../public/images/reviews-png-3-mini.png" alt="" height={45} />
                            </a>
                            <p className='fw-bold m-0 text-primary mt-3' style={{ fontSize: '12px' }}>4.9 OUT OF 5.0 ON GOOGLE WITH 81 REVIEWS.</p>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <div style={{ height: 45 }}>
                                <a href="#">
                                    <img src="../../public/images/10years2.png" alt="" height={80} style={{ transform: 'translateY(-20px)' }} />
                                </a>
                            </div>
                            <p className='fw-bold m-0 text-primary mt-3' style={{ fontSize: '12px' }}>
                                CELEBRATING OVER 10 YEARS OF EXCELLENCE CLICK HERE TO SEE OUR FULL REVIEWS
                            </p>
                        </div>
                        <div className="col-lg-4 col-12 text-center">
                            <a href="#">
                                <img src="../../public/images/yell-review-5-stars-mini.png" alt="" height={45} />
                            </a>
                            <p className='fw-bold m-0 text-primary mt-3' style={{ fontSize: '12px' }}>
                                4.8 OUT OF 5.0 ON YELL WITH 33 REVIEWS.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <Courses />
            <TrackCourses />
            <section
                className='text-white p-lg-5 p-4 position-relative bg-primary'
            >
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundImage: `url(${bgBanner})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        opacity: '0.09',
                        mixBlendMode: 'luminosity',
                        filter: 'brightness(100%) contrast(78%) saturate(200%) blur(0px) hue-rotate(0deg)'
                    }}
                />
                <div className='border border-2 border-white p-lg-5 p-4 rounded-3 text-center'>
                    <h3 className='fw-bold mb-3'>FIND OUT MORE ABOUT OUR BRITISH CITIZENSHIP COURSES.</h3>
                    <h3 className='fw-bold mb-3'>SPEAK WITH US ON <u>01158376502</u> TO DISCUSS YOUR TEST!</h3>
                    <div className='d-flex flex-lg-row flex-column justify-content-center align-items-center gap-4'>
                        <Button variant='danger' className='bg-danger text-white rounded-5 px-4 py-2 fw-bold' size='lg'>
                            Get More Information
                            <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Button>
                        <Button variant="success" className='bg-success text-white rounded-5 px-4 py-2 fw-bold' size='lg'>
                            <i className="fa-brands fa-whatsapp me-2"></i>
                            Chat Now On Whatsapp
                        </Button>
                    </div>
                </div>
            </section>
            <Reviews />
            <Articles />
        </main>
        <Footer />
    </>);
};

export default Home;