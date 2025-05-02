import React from "react";
import { useNavigate } from "react-router-dom";

const Classes = ({classes}) => {
    const Navigate = useNavigate();

    const changehandler = () => {
       Navigate("/classes")
      };
    return (
        <div className="classesSections w-full h-[648px] relative bg-transparent bg-gradient-to-tl flex flex-col gap-[80px] from-[#12100e] to-[#3d3d3d]">
            <div className="classesSection1">
                <div className="flex flex-col items-center">
                <div className="bg-white w-[0.5px] h-[50px] mt-[110px]"></div>
                    <span className="text-white oswald1 leading-[1em] mt-[11px] text-white text-[20px]">Pro Selected</span>
                    <h1 className="text-yellow500 oswald2 leading-[38px] text-[30px]">OUR CLASSES</h1>
                </div>
            </div>

            <div className="classesSection2 bg-v flex flex-col w-[1100px] ml-[210px]">
            <div className=" classesSection2heading flex flex-column bg-blac justify-center gap-[75px]">
             {
                classes.map((class1, index) => {
                    return (
                        <div className=" classesSection2main mt-[-30px] bg-whit" key={class1} {...class1}>
                            <h1 className="text-yellow500 oswald leading-[38px] text-[20px] flex justify-center ">{class1.heading}</h1>
                            <p className="text-white text-[14px] noto-sans flex justify-center text-center mt-[11px]">{class1.description}</p>
                        </div>
                    )
                })
             }
            </div>

            <div className="flex justify-center mt-[51px]">
                <button className="text-white bg-yellow500 w-[164px] h-[45px] oswald1 rounded-[40px] text-[15px]" onClick={changehandler}>MORE CLASSES</button>
            </div>
            </div>

        </div>
    )
}

export default Classes;
// absolute top-[109px] left-[759px]