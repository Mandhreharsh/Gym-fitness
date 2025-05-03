import React from "react";

const Features = ({ feature }) => {
    return (
        <div className="featureMainhesding bg-main2 w-full h-[600px] bg-repeat bg-cover relative flex justify-center">
            <div className="featureheading w-[1100px] h-[500px] mt-[50px] flex flex-row justify-between ">

                {/* first */}
                <div className="featuresection1 bg-whit w-[570px] h-[500px] flex flex-row bg-whit">
                    <div className="bg-white mt-[80px] w-[0.5px] h-[50px]"></div>

                    <div className="flex flex-col ml-[30px] gap-[50px] mt-[-2px]">
                        <div className="flex flex-col text-white">
                            <span className="featuretxt text-white oswald1 leading-[1em] mt-[79px] text-white text-[20px]">Awsome Features</span>
                            <span className="featuretxt text-yellow500 oswald2 leading-[38px] text-[30px]">WHY CHOOSE US</span>
                        </div>
                        <div className="featureheadingmain1txt  flex felx-row flex-wrap justify-between ml-[-35px] gap-[23px]">
                            {
                                feature.map((features, index) => {
                                    return (
                                        <div className="featureheadingmaintxt flex  w-[270px] gap-x-[30px] bg-whit" key={features} {...features}>
                                            <img className="h-[55px] w-[55px]" src={features.image} alt="" />
                                            <div className="featureheadingtxt flex flex-col ">
                                                <p className="featureheadingtxt1 text-white text-[14px] noto-sans oswald text-xl">{features.heading}</p>
                                                <p className="featureheadingtxt2 text-white text-[14px] noto-sans text-wrap">{features.description}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

                {/* Second */}
                <div className="featuresection2 mt-[149px] mr-[30px]">
                    <h1 className="featuresection2txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">WORK OUT</h1>
                    <h1 className="featuresection2txt text-white text-[100px] leading-[1em] oswald  text-center">RIGHT NOW</h1>
                </div>
            </div>
        </div>
    )
}

export default Features;