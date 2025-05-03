import React from "react";
import Mainbg from "../images/mainbg.jpg"
import storybg from "../images/storybg.jpg";
import { useNavigate } from "react-router-dom";

const Story = ({ aboutUs }) => {
    const Navigate = useNavigate();

    const changehandler = () => {
        Navigate("/about")
    };
    return (
        <div className="storyMainheading w-full relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] flex justify-center">
            <div className="bg-blac storyheading flex flex-row h-[500px] w-[1100px] mt-[103px] gap-[30px] justify-between">
                {/* first */}
                <div className=" storysection1 w-[1700px] h-[500px] flex flex-row bg-whit">
                    <div className="storysectionLine1 bg-white w-[0.5px] h-[50px]"></div>
                    <div className="flex flex-col ml-[30px] mt-[-2px]">
                        <span className="storysection1txt text-white oswald1 leading-[1em] text-[20px]">Overview Intro</span>
                        <span className="storysection1txt text-yellow500 oswald2 leading-[38px] text-[30px]">OUR STORY</span>

                        <div className=" mt-[45px] w-full">
                            <img className=" storysection1img h-[262px] rounded-[10px]" src={storybg} alt="" />
                        </div>
                    </div>
                </div>

                {/* Second */}

                <div className="storysection2 h-[500px] relative flex flex-col gap-[30px]">
                    <div className=" storyLine bg-white w-[0.5px] h-[50px] absolute top-[1px] left-[50px]"></div>
                    <div className="flex flex-col ml-[77px] mt-[-2px]">
                        <span className="text-white oswald1 leading-[1em] text-white text-[20px]">About Us</span>
                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">WHO WE ARE</span>
                    </div>
                    <div>
                        {
                            aboutUs.map((about, index) => {
                                return (
                                    <div className="mt-[15px] ml-[77px] flex flex-col gap-[21px]" key={about} {...about}>
                                        <p className="storytxt1 text-white text-[14px] noto-sans ">{about.description}</p>
                                        <p className="storytxt1 text-white text-[14px] noto-sans">{about.description1}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className=" ml-[77px] mt-[7px]">
                        <button className="text-white bg-yellow500 w-[144px] h-[45px] oswald1 rounded-[40px] text-[15px]" onClick={changehandler}>READ MORE</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Story;