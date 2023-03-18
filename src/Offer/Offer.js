import Clock from './image/clock.svg';
import Eye from './image/eye.svg';
import '../Scss/main.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import Swiper core and required modules
const Offer = function(){
    return(
        <div className="offer-back pb-5">
            <div className="container">
                <div className="offer pt-5 pb-5">
                    <span className="offer-span text-center d-block pt-5">Testimony</span>
                    <h2 className='offer-h2 text-center pt-5'>Happy customers</h2>
                    <Swiper className='d-none d-lg-flex justify-content-between pt-5'
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={3}
                      navigation
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className=''>
                        <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="clock"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="clock"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div> 
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="clock"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="clock"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <Swiper className=' d-none justify-content-between pt-5 d-sm-flex d-lg-none'
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={2}
                      navigation
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <Swiper className='d-flex justify-content-between pt-5 d-sm-none '
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                      scrollbar={{ draggable: true }}
                      onSwiper={(swiper) => console.log(swiper)}
                      onSlideChange={() => console.log('slide change')}
                    >
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-75 w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100'> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                      <div className="card text-right w-100 ">
                          <div className="card-body">
                            <h5 className="card-title">Maria</h5>
                            <p className="text-dark d-block pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing sit. auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisq...</p>
                            <div className='d-flex align-items-center justify-content-between w-100 '> 
                                <input type="date" id="date" name="date" className='border-0 w-5'/>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 lh-1'> 
                                    <img src={Clock} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>11:15</span>
                                </div>
                                <div className='d-flex align-items-center justify-content-betwee gap-1 '>
                                    <img src={Eye} alt="eye"/>
                                    <span className='text-dark fs-6 fw-light'>222</span>
                                </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
  );
  
}
export default Offer;