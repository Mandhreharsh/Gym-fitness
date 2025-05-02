import React from "react";
// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Mainbg from "../images/mainbg.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Team1 from '../images/expertTeam1.png'
import Team2 from '../images/expertTeam2.png'
import Team3 from '../images/expertTeam3.png'
import Team4 from '../images/expertTeam4.png'

const OurTeam = ({ Teams }) => {

    return (
        <div className="ourteammainsection w-full h-[642px] relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] flex justify-center">
            <div className="ourteamsection flex flex-row h-[500px] w-[1150px] mt-[103px] gap-[10px] justify-between">
                {/* first */}
                <div className="ourteamsection1 h-[500px]">
                <div className="flex flex-col">
                <div className="bg-white w-[0.5px] ml-[20px] h-[50px]"></div>
                    <div className="flex flex-col ml-[57px] mt-[-50px]">
                        <span className="text-white oswald1 leading-[1em] text-[20px]">Our Strongest Team</span>
                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">MEET EXPERT TRAINERS</span>
                    </div>

                    <div className="ourteamheading  relative">
                        <div>
                            {
                                Teams.map((Team, index) => {
                                    return (
                                        <div className="ourteamtxt mt-[49px] ml-[57px] flex flex-col w-[470px]" key={Team} {...Team}>
                                            <p className="text-white text-[14px] noto-sans">{Team.description}</p>
                                            <p className="text-white text-[14px] mt-[-14px] noto-sans">{Team.description1}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className="ml-[57px] mt-[51px]">
                            <button className="text-white bg-yellow500 w-[170px] h-[45px] oswald1 rounded-[40px] text-[15px]">MORE TRAINERS</button>
                        </div>
                    </div>
                </div>
                </div>


                <Swiper
                    slidesPerView={1}
                    loop={Infinity}
                    spaceBetween={30}
                    centeredSlides={true}
                    speed={3000}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="slider1 mt-[60px] absolute top-[3px] left-[55px] shadow-xl w-[470px] h-[345px] rounded-xl " >

                    <SwiperSlide>
                        <div className='bg-lightBlue200 relative w-[745px] '>
                            <img className="h-[345px] w-[700px]" src={Team1} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-lightBlue200 relative w-[745px] '>
                            <img className="h-[345px] w-[700px]" src={Team2} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-lightBlue200 relative w-[745px] '>
                            <img className="h-[345px] w-[700px]" src={Team3} alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='bg-lightBlue200 relative w-[745px] '>
                            <img className="h-[345px] w-[700px]" src={Team4} alt="" />
                        </div>
                    </SwiperSlide>
                </Swiper>

            </div>
        </div>
    )
}

export default OurTeam;