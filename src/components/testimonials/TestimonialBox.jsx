import React from 'react'
import img1 from '../../images/img1.png'
import img2 from '../../images/img2.png'
import img3 from '../../images/img3.png'
import img4 from '../../images/img4.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay"

// import required modules
import { Autoplay, FreeMode, Pagination } from "swiper";


const TestimonialBox = () => {
    const feedBacks = [
        {
            name: 'William Ingris',
            occupation: 'Freelancer',
            message: 'A service that really helps me to watch my favourite movies from various series that I always look forward to.',
            picture: img1
        },
        {
            name: 'Bellion Notos',
            occupation: 'Office Worker',
            message: 'It was really fun because all new movies are usually only shown in theatres are presented there.',
            picture: img2
        },
        {
            name: 'James Smith ',
            occupation: 'Student',
            message: 'It is the right choice to fill my spare time by watching movies here, I really like this platform.',
            picture: img3
        },
        {
            name: 'Jessica Carrigan',
            occupation: 'Journalist',
            message: 'I have found good movies and series here that really help my stories. It is an awesome platform.',
            picture: img4
        }
    ]
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
        }}
        breakpoints={{  
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        modules={[FreeMode, Pagination, Autoplay]}
        className="mySwiper"
      >
          {feedBacks.map((item) =>(
            <SwiperSlide>
              <div className='bg-[#2B303B] mb-2 rounded-xl text-white p-4 lg:p-8 flex flex-col items-center gap-6 w-full'>
                  <p>{item.message} </p>
                  <div className="w-14 h-14 rounded-full overflow-hidden">
                      <img src={item.picture} alt={item.name} />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                      <h5>{item.name} </h5>
                      <p className="text-light">{item.occupation} </p>
                  </div>
              </div>
            </SwiperSlide>
          ))}

    </Swiper>
  )
}

export default TestimonialBox