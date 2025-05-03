import React from "react";

const AboutUs = ({ about }) => {
    return (
        <div className="AboutusMainHeading bg-main5 h-[788px] w-full mt-[-70px] flex flex-column justify-center bg-cover">
            <div className="AboutusHeading h-[400px] w-[1150px] mt-[290px] flex flex-row justify-between gap-x-[200px]">
                {/* first */}
                <div className="AboutusHeading1 w-[890px] h-[400px] flex flex-col justify-center mt-[-50px]">
                    <h1 className="AboutusHeadingtxt text-[100px] leading-[1em] oswald text-center text-yellow500">WHO</h1>
                    <h2 className="AboutusHeadingtxt text-white text-[100px] leading-[1em] oswald  text-center">WE ARE</h2>
                </div>

                {/* second */}
                <div className="">
                    <div className=" h-[300px]">
                        <div className=" bg-white w-[0.5px] h-[50px] ml-[17px] mt-[25px]"></div>
                        <div className="flex flex-col ml-[49px] mt-[-54px]">
                            <span className="text-white oswald1 leading-[1em] text-[20px]">About Us</span>
                            <span className="text-yellow500 text-black oswald2 leading-[38px] text-[30px]">FIT FACTORY</span>
                        </div>

                        <div>
                            {
                                about.map((AboutUs, index) => {
                                    return (
                                        <div className="mt-[45px] ml-[49px] flex flex-col " key={AboutUs} {...AboutUs}>
                                            <p className="text-white text-[14px] noto-sans">{AboutUs.description}</p>
                                            <p className="text-white text-[14px] mt-[-12px] noto-sans ">{AboutUs.description1}</p>
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

export default AboutUs;