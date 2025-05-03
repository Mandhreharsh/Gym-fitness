import React from "react";

const OurTrainers = ({ AllTrainers }) => {
    return (
        <div className="OurTrainersMain w-full h-[750px] bg-main2 bg-cover">
            <div className="">
                <div className="flex flex-col items-center">
                    <div className="bg-white w-[0.5px] h-[50px] mt-[105px]"></div>
                    <span className="text-white oswald1 leading-[1em] mt-[11px] text-white text-[20px]">Our Strongest Team</span>
                    <h1 className="text-yellow500 oswald2 leading-[38px] text-[30px]">MEET EXPERT TRAINERS</h1>
                </div>
            </div>
            <div className=" flex justify-center">
                <div className="OurTrainersSection2 h-[300px] flex flex-row items-center gap-[100px] mt-[100px]">
                    {
                        AllTrainers.map((trainers, index) => {
                            return (

                                <div className="ourTrainersteam flex flex-col justify-center items-center" key={trainers} {...trainers}>
                                    <img className="h-[320px] w-[220px]" src={trainers.image} alt="" />
                                    <div className="bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] h-[100px] w-[250px] mt-[-70px] rounded-xl shadow-sm shadow-black" >
                                        <h1 className="text-center mt-[25px] oswald1 text-yellow-500 text-[20px]">{trainers.name}</h1>
                                        <p className="text-center text-white noto-sans text-[13px]">{trainers.profession}</p>
                                    </div>
                                </div>

                            )
                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default OurTrainers;
