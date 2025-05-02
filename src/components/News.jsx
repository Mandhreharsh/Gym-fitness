import React from "react";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Mainbg from "../images/mainbg.jpg";
import Calender from "../images/calender.png";
import blog from "../images/blog.jpg"
import blog2 from "../images/blog2.jpg"
import blog3 from "../images/blog3.png"
import blog4 from "../images/blog4.png"

const News = () => {
    return (
        <div className="NewsMainHeading bg-main4 bg-cover bg-center bg-no-repeat w-full h-[600px] w-full flex flex-column justify-center">
            <div className="NewsHeading flex flex-row h-[500px] w-[1150px] mt-[50px] gap-[10px] justify-between relative">
                {/* first */}
                <div className="NewsSection1 h-[500px] w-[500px]">
                   <div className="flex flex-row mt-[40px]">
                   <div className="bg-white w-[0.5px] h-[50px] "></div>
                    <div className="flex flex-col ml-[62px] ">
                        <span className="text-white oswald1 leading-[1em] text-[20px]">Recent News</span>
                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">TODAY IN THE GYM</span>
                    </div>
                   </div>

                    <div className="NewsSlider h-[500px] relative">
                    <Swiper
                    slidesPerView={1}
                    loop={Infinity}
                    spaceBetween={249}
                    centeredSlides={true}
                    speed={2000}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className=" mt-[30px] absolute top-[10px] left-[-30px] shadow-xl w-[300px] mr-[50px] h-[300px]" >

                    <SwiperSlide>
                        <div className=' relative w-[750px] rounded-[20px]'>
                            <img className="h-[210px] w-[300px] rounded-tl-lg rounded-tr-lg shadow-xl shadow-black" src={blog} alt="" />
                            <div className="bg-black h-[90px] w-[300px] flex flex-col justify-center  rounded-bl-lg rounded-br-lg">
                                <div className="ml-[10px]  shadow-xl shadow-black">
                                <span className="text-yellow500 oswald2 leading-[20px] text-[18px] w-[200px]">HOW TO GET THE MOST OUT OF YOUR GYM MEMBERSHIP</span>
                                <div className="flex flex-row gap-[5px] mt-[2px]">
                                    <img className="h-[15px] w-[15px]" src={Calender} alt="" />
                                    <span className="text-white oswald1 leading-[1em] text-[12px] mt-[1px]">September 28, 2023</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' relative w-[750px] rounded-[20px]'>
                            <img className="h-[210px] w-[300px] rounded-tl-lg rounded-tr-lg shadow-xl shadow-black" src={blog2} alt="" />
                            <div className="bg-black h-[90px] w-[300px] flex flex-col justify-center  rounded-bl-lg rounded-br-lg">
                                <div className="ml-[10px]  shadow-xl shadow-black">
                                <span className="text-yellow500 oswald2 leading-[20px] text-[18px] w-[200px]">HOW TO GROW YOUR MUSCLE IN OUR GYM HALL</span>
                                <div className="flex flex-row gap-[5px] mt-[2px]">
                                    <img className="h-[15px] w-[15px]" src={Calender} alt="" />
                                    <span className="text-white oswald1 leading-[1em] text-[12px] mt-[1px]">September 28, 2023</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' relative w-[750px] rounded-[20px]'>
                            <img className="h-[210px] w-[300px] rounded-tl-lg rounded-tr-lg shadow-xl shadow-black" src={blog3} alt="" />
                            <div className="bg-black h-[90px] w-[300px] flex flex-col justify-center  rounded-bl-lg rounded-br-lg">
                                <div className="ml-[10px]  shadow-xl shadow-black">
                                <span className="text-yellow500 oswald2 leading-[20px] text-[18px] w-[200px]">SEPTEMBER LEADERBOARD CHALLENGE</span>
                                <div className="flex flex-row gap-[5px] mt-[2px]">
                                    <img className="h-[15px] w-[15px]" src={Calender} alt="" />
                                    <span className="text-white oswald1 leading-[1em] text-[12px] mt-[1px]">September 28, 2023</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className=' relative w-[750px] rounded-[20px]'>
                            <img className="h-[210px] w-[300px] rounded-tl-lg rounded-tr-lg shadow-xl shadow-black" src={blog4} alt="" />
                            <div className="bg-black h-[90px] w-[300px] flex flex-col justify-center  rounded-bl-lg rounded-br-lg">
                                <div className="ml-[10px]  shadow-xl shadow-black">
                                <span className="text-yellow500 oswald2 leading-[20px] text-[18px] w-[200px]">MULTI GYM WORKOUT PAL FOR BEGINNERS</span>
                                <div className="flex flex-row gap-[5px] mt-[2px]">
                                    <img className="h-[15px] w-[15px]" src={Calender} alt="" />
                                    <span className="text-white oswald1 leading-[1em] text-[12px] mt-[1px]">September 28, 2023</span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                   
                  
                
                </Swiper>
                    </div>

                </div>

                {/* second  */}

                <div>
                <div className="NewsSection2 w-[600px] h-[500px] flex flex-col justify-center ">
                    <h1 className="NewsSection2txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">LATEST</h1>
                    <h2 className="NewsSection2txt text-white text-[100px] leading-[1em] oswald  text-center">BLOG POSTS</h2>
                </div>
                </div>
            </div>
        </div>
    )
}

export default News;