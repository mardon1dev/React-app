import Image1 from  "./image/image1.png";
import Image2 from  "./image/image2.png";
import Image3 from  "./image/image3.png";
import Image4 from  "./image/image4.png";
import Mark from "./image/mark.png";

import '../Scss/main.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


// import Swiper core and required modules
const Men = function(){
    return(
        <div className="product-back pb-5">
            <div className="container">
                <div className="product pt-5 pb-5">
                    <span className="product-h1">Popular Dishes</span>
                    <Swiper className='d-none d-lg-flex justify-content-between pt-5'
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={3}
                      navigation
                    >
                      <SwiperSlide className=''>
                        <div className="card text-center w-100 ">
                          <img src={Image1} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image2} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image3} className="card-img-top" alt="image"/>
                            <div className="card-body">
                              <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                              <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                              <span className="text-danger d-block pt-3">$12.00</span>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image4} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <Swiper className=' d-none justify-content-between pt-5 d-sm-flex d-lg-none'
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={2}
                      navigation
                    >
                      <SwiperSlide className=''>
                        <div className="card text-center w-100 ">
                          <img src={Image1} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image2} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image3} className="card-img-top" alt="image"/>
                            <div className="card-body">
                              <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                              <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                              <span className="text-danger d-block pt-3">$12.00</span>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image4} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                    <Swiper className='d-flex justify-content-between pt-5 d-sm-none '
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      spaceBetween={30}
                      slidesPerView={1}
                      navigation
                    >
                      <SwiperSlide className=''>
                        <div className="card text-center w-100 ">
                          <img src={Image1} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image2} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image3} className="card-img-top" alt="image"/>
                            <div className="card-body">
                              <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                              <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                              <span className="text-danger d-block pt-3">$12.00</span>
                            </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className=''>
                        <div className="card text-center w-100">
                          <img src={Image4} className="card-img-top" alt="image"/>
                          <div className="card-body">
                            <h5 className="card-title">Barbecue Shish kebab Shashlik Skewer</h5>
                            <img src={Mark} className="card-img-top w-25 pt-3" alt="image"/>
                            <span className="text-danger d-block pt-3">$12.00</span>
                          </div>
                        </div>
                      </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
  );
  
}
export default Men;