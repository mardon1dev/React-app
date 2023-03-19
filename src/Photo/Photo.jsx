import '../Scss/main.css'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Photo1 from './photo1.png';
import Photo2 from './photo2.png';
import Photo3 from './photo3.png';

const Photo = () => {
  return (
    <div className="photos">
        <div className="container">
            <div className="photo pb-5">
                <div className='row d-flex align-items-center gy-4'>
                <div className="photo__main col-md-4 col-12 text-md-start text-center px-4">
                    <span className="photo__main--span">Instagram</span>
                    <h3 className="photo__main--h3">Photo Gallery</h3>
                    <p className="photo__main--p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
                    <button className="photo__main--button">View more</button>
                </div> 
                <div className="photo__images col-md-8 col-12">
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={3}
                        // navigation
                        // pagination={{ clickable: true }}
                        scrollbar={{ draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="d-none d-sm-block"
                    >
                        <SwiperSlide><img src={Photo1} alt="photo1" style={{width: "100%"}}/></SwiperSlide>
                        <SwiperSlide><img src={Photo2} alt="photo2" style={{width: "100%"}}/></SwiperSlide>
                        <SwiperSlide><img src={Photo3} alt="photo3" style={{width: "100%"}}/></SwiperSlide>
                        <SwiperSlide><img src={Photo2} alt="photo2" style={{width: "100%"}}/></SwiperSlide>
                        {/* <SwiperSlide><div className='hover'>jbrebkrb brekr</div></SwiperSlide> */}
                    </Swiper>
                    <Swiper
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={30}
                        slidesPerView={1}
                        // navigation
                        // pagination={{ clickable: true }}
                        scrollbar={{ draggable: true}}
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log('slide change')}
                        className="d-sm-none d-block"

                    >
                        <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={Photo1} alt="photo1" style={{width: "70%"}}/></SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={Photo2} alt="photo2" style={{width: "70%"}}/></SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={Photo2} alt="photo2" style={{width: "70%"}}/></SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={Photo3} alt="photo3" style={{width: "70%"}}/></SwiperSlide>
                        <SwiperSlide className='d-flex align-items-center justify-content-center'><img src={Photo2} alt="photo2" style={{width: "70%"}}/></SwiperSlide>
                    </Swiper>
                </div>
                </div>
            </div>
        </div>
    </div>
)
}

export default Photo;