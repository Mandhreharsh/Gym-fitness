import React from "react";
import Card1 from "./Card1";
import Card2 from "./Card2";
import MainCard from "./MainCard";

const PricingSection = () => {
    return (
        <div className="PriceMainPart bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] h-[898px] w-full flex flex-row justify-center">
            <div className=" h-[700px] w-[1300px] mt-[90px] ">
                <div className="flex flex-row justify-center mt-[20px]">
                    <div className="bg-white w-[0.5px] h-[50px]"></div>
                </div>
                <div className="flex flex-col mt-[12px]">
                    <span className="text-white text-center oswald1 leading-[1em] text-[20px]">Start The Process</span>
                    <span className="text-yellow500 text-center oswald2 leading-[38px] text-[30px]">CHOOSE YOUR PLAN</span>



                    <div className="flex flex-col justify-cenetr items-center mt-[30px]">
                        <div className="h-[45px] w-[250px] flex flex-row">
                            <div className="h-[45px] w-[125px] bg-black rounded-l-full flex items-center justify-center oswald1">
                                <h1 className="text-white">MONTHLY</h1>
                            </div>

                            <div className="h-[45px] w-[125px] bg-yellow-500 rounded-r-full flex items-center justify-center oswald1">
                                <h1 className="text-white">YEARLY</h1>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="PriceMainPart1 h-[550px] ml-[50px] flex flex-row gap-[36px] justify-center w-[1200px]">

                    <div className=" relative bg-gradient-to-tl from-black-300 via-black-600 to-black-800 w-[340px] h-[444px] mt-[45px] shadow-black shadow-xl rounded-xl">

                        <div>
                            <Card1></Card1>
                        </div>
                    </div>

                    <div className="mainCard bg-gradient-to-br from-yellow-100 via-yellow-400 to-yellow-600 w-[348px] h-[485px] mt-[25px] rounded-xl">
                        <div>

                            <MainCard></MainCard>
                        </div>
                    </div>




                    <div className="Card2 relative bg-gradient-to-tl from-black-300 via-black-600 to-black-800 w-[340px] h-[444px] mt-[45px] shadow-black shadow-xl rounded-xl">
                        <div>
                            <Card2></Card2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingSection;