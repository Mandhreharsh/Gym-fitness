import React from "react";
import Mainbg from "../images/mainbg.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Quote from "../images/quote.png"
import testimonials1 from  "../images/testimonials1.png"
import testimonials2 from  "../images/testimonials2.png"
import testimonials3 from  "../images/testimonials3.png"
import testimonials4 from  "../images/testimonials4.png"

const Testimonials = () => {
    return (
        <div className="TestimonialmainSection flex flex-row justify-center bg-main3 h-[600px] bg-repeat bg-cover w-full">
            <div className="TestimonialSection relative flex flex-row justify-between w-[1150px] h-[500px] mt-[51px]">
                <div className="TestimonialSection1 h-[500px] flex flex-col justify-center">
                    <h1 className="TestimonialSection1txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">HARD WORK</h1>
                    <h2 className="TestimonialSection1text2 text-white text-[100px] leading-[1em] oswald  text-center">PAYS OFF</h2>
                </div>

                <div className="TestimonialSection2 h-[500px] relative">
                    <div className="bg-white w-[0.5px] h-[50px] absolute top-[30px] left-[0px]"></div>
                    <div className="flex flex-col ml-[45px] mt-[27px]">
                        <span className="text-white oswald1 leading-[1em] text-white text-[20px]"> Testimonials</span>
                        <span className="TestimonialSection1text3 text-yellow500 oswald2 leading-[38px] text-[30px]">WHAT CLIENTS SAY</span>
                    </div>



                    <Swiper
                        slidesPerView={1}
                        loop={Infinity}
                        spaceBetween={200}
                        centeredSlides={true}
                        speed={3000}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation]}
                        className="TestimonialSlider absolute top-[50px] left-[0px]  mt-[3px] absolute top-[60px] left-[-20px] w-[470px] h-[220px] rounded-xl " >

                        <SwiperSlide>
                            <div className=' relative '>
                                <img className="h-[50px] w-[50px]" src={Quote} alt="" />
                                <p className="mt-[10px] text-white text-[14px] noto-sans">I’ve been a member of Fitness for over a year, and it’s transformed my life! The coaches are incredibly knowledgeable and really take the time to understand my goals.</p>
                                <div className="flex flex-row gap-[10px] mt-[60px]">
                                    <img className="h-[40px] w-[40px] bg-black rounded-full" src={testimonials1} alt="" />
                                    <div className="flex flex-col leading-[20px]">
                                        <h1 className="text-white oswald1 text-white text-[15px]"> John D.</h1>
                                        <span className="text-white">Athlete Training</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' relative  '>
                                <img className="h-[50px] w-[50px]" src={Quote} alt="" />
                                <p className="mt-[10px] text-white text-[14px] noto-sans">I’ve been doing Hot Yoga at Fitness for the past few months, and it’s been a game-changer. I feel more flexible, less stressed, and my overall fitness has improved</p>
                                <div className="flex flex-row gap-[10px] mt-[60px]">
                                    <img className="h-[40px] w-[40px] bg-black rounded-full" src={testimonials2} alt="" />
                                    <div className="flex flex-col leading-[20px]">
                                        <h1 className="text-white oswald1 text-white text-[15px]"> Michael S.</h1>
                                        <span className="text-white">Athlete Training</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' relative'>
                                <img className="h-[50px] w-[50px]" src={Quote} alt="" />
                                <p className="mt-[10px] text-white text-[14px] noto-sans">I joined Fitness to lose weight, and not only have I seen fantastic results, but I’ve also gained so much confidence. The trainers helped me create a customized fitness plan.</p>
                                <div className="flex flex-row gap-[10px] mt-[60px]">
                                    <img className="h-[40px] w-[40px] bg-black rounded-full" src={testimonials3} alt="" />
                                    <div className="flex flex-col leading-[20px]">
                                        <h1 className="text-white oswald1 text-white text-[15px]">Sophia T. </h1>
                                        <span className="text-white">Athlete Training</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className=' relative  '>
                                <img className="h-[50px] w-[50px]" src={Quote} alt="" />
                                <p className="mt-[10px] text-white text-[14px] noto-sans">The team at Fitness is incredibly supportive. They’re always there to motivate me, whether I’m lifting weights or working on my cardio</p>
                                <div className="flex flex-row gap-[10px] mt-[60px]">
                                    <img className="h-[40px] w-[40px] bg-black rounded-full" src={testimonials4} alt="" />
                                    <div className="flex flex-col leading-[20px]">
                                        <h1 className="text-white oswald1 text-white text-[15px]">David W.</h1>
                                        <span className="text-white">Athlete Training</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                       
                    
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;