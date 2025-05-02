import React from "react";

const PricingHeading = ({pricingHead}) => {
    return (
        <div className="PricingHeadingMain bg-main5 h-[788px] w-full mt-[-70px] flex flex-column justify-center bg-cover">
            <div className="PricingHeadingSections h-[300px] w-[1100px] mt-[290px] flex flex-row justify-between gap-[100px]">
                {/* first */}
                <div className="PricingHeadingSection1 w-[1300px] h-[300px] flex flex-col justify-center">
                        <h1 className="PricingHeadingtxt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">READY FOR</h1>
                        <h2 className="PricingHeadingtxt text-white text-[100px] leading-[1em] oswald  text-center">SWEATING</h2>
                </div>

                {/* second */}
                <div className=" h-[300px] ">
                <div className="PricingHeadingSection2 h-[270px]">
                    <div className=" bg-white w-[0.5px] h-[50px] ml-[39px] mt-[30px]"></div>
                         <div className="flex flex-col ml-[70px] mt-[-54px]">
                            <span className="text-white oswald1 leading-[1em] text-[20px]">Join Now</span>
                            <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">PRICING & PLANS</span>
                         </div>

                        <div>
                            {
                                pricingHead.map((priceheadings, index) => {
                                    return (
                                        <div className="mt-[38px] ml-[70px] flex flex-col" key={priceheadings} {...priceheadings}>
                                            <p className="text-white text-[14px] noto-sans">{priceheadings.description}</p>
                                            <p className="text-white text-[14px] mt-[-8px] noto-sans">{priceheadings.description1}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PricingHeading;