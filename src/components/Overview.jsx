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
import { Grid } from 'swiper/modules';
import OverviewImage from "../images/blog4.png";

const Overview = ({ study }) => {

    return (
        <div className="Overviewmain w-full h-[476px] relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] flex justify-center">
            <div className="OverviewHeading flex flex-row h-[300px]  w-[1050px] mt-[103px] gap-[70px] justify-between">
                {/* first */}
                <div className="">
                    <div className="bg-white w-[0.5px] ml-[20px] h-[50px]"></div>
                    <div className="flex flex-col ml-[57px] mt-[-50px]">
                        <span className="text-white oswald1 leading-[1em] text-[20px]">Gym Overview</span>
                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">READY FOR SOME SWEATING</span>
                    </div>

                    <div className="OverviewSection1 h-[200px] relative">
                        <div>
                            {
                                study.map((studies, index) => {
                                    return (
                                        <div className="mt-[40px] ml-[57px] flex flex-col" key={studies} {...studies}>
                                            <p className="text-white text-[14px] noto-sans">{studies.description}</p>
                                            <p className="text-white text-[14px] mt-[-14px] noto-sans">{studies.description1}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                        
                    </div>
                </div>



                <div>
                    <img className="h-[270px] w-[1200px] rounded-xl shadow-black shadow-md" src={OverviewImage} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Overview;


