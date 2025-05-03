import React from "react";
import { useNavigate } from "react-router-dom";

const Classes = ({ classesList }) => {
    const Navigate = useNavigate();

    const changehandler = () => {
        Navigate("/pricing");
    };
    return (
        <div className="ClassesSectionMain w-full h-[1250px] relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">
            <div className="ClassesSection1">
                <div className="flex flex-col items-center">
                    <div className="bg-white w-[0.5px] h-[50px] mt-[110px]"></div>
                    <span className="text-white oswald1 leading-[1em] mt-[11px] text-white text-[20px]">Classes List</span>
                    <h1 className="text-yellow500 oswald2 leading-[38px] text-[30px]">CHOOSE YOURS</h1>
                </div>

                <div className="flex justify-center">
                    <div className="flex flex-wrap gap-[10px] justify-center mt-[px] w-[1300px]">
                        {
                            classesList.map((List) => {
                                return (
                                    <div className=" h-[490px] w-[400px] flex flex-col justify-center items-center gap-[15px] shadow-lg" key={List.id} {...List}>
                                        <div className="">
                                            <img className="h-[200px] w-[340px] rounded-[20px] shadow-black shadow-md" src={List.image} alt="" />
                                        </div>
                                        <h1 className="text-yellow500 oswald leading-[18px] text-[20px] flex justify-center">{List.heading}</h1>
                                        <p className="text-white text-[14px] noto-sans w-[200px] flex justify-center text-center w-[330px]">{List.description}</p>
                                        <div className="">
                                            <button className="text-white bg-yellow500 w-[130px] h-[45px] oswald1 rounded-[40px] text-[15px]" onClick={changehandler}>{List.btn}</button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Classes;