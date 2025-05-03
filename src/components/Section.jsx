import React from "react";
import Facebook from "../images/facebook.png";
import LinkedIn from "../images/linked in.png";
import Twitter from "../images/twitter.png";
import "../App.css"
import { useNavigate } from "react-router-dom";

const Section = () => {
    const Navigate = useNavigate();

    const changehandler = () => {
        Navigate("/login")
    };
    return (
        <div className=" bg-main2 bg-repeat bg-cover w-full h-[800px] relative mt-[-70px] md:w-full">
            <div className="flex justify-center">
                <div className=" sectionhead flex flex-row justify-center  relative mr-[180px] w-[1000px] h-[250px] mt-[295px] justify-between ">

                    {/* first */}

                    <div className=" sectionheading1 flex flex-col gap-[20px] items-center md:mx-auto">

                        <div className="bg-white w-[0.5px] h-[50px]"></div>


                        <span>
                            <img className="w-[25px] h-[25px]" src={Facebook} alt="" />
                        </span>

                        <span>
                            <img className="w-[25px] h-[25px]" src={LinkedIn} alt="" />
                        </span>

                        <span>
                            <img className="w-[20px] h-[20px]" src={Twitter} alt="" />
                        </span>

                        <div className="bg-white w-[0.5px] h-[50px]"></div>

                    </div>

                    {/* second  */}


                    <div className=" sectiontxt flex flex-col gap-[60px]">
                        <span className="sectionheading2">
                            <h1 className=" txt1 text-white text-[100px] leading-[1em] oswald text-center text-yellow500 ">HARD ROCK GAME</h1>
                            <h1 className=" txt2 text-white text-[100px] leading-[1em] oswald text-center">TIME TO CHANGE</h1>
                        </span>


                        <div className=" sectionbtn flex justify-center">
                            <button className="text-white bg-yellow500 w-[150px] h-[45px] oswald1 rounded-[40px] text-[15px]" onClick={changehandler}>KNOW MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Section;

