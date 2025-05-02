import React from "react";
import ScheduleImage from "../images/blog.jpg";

const Schedule = ({ time }) => {
    return (
        <div className="ScheduleSectionMain w-full h-[600px] relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d] flex justify-center items-center">
            <div className="ScheduleSection w-[1150px]">
                {/* first */}
               <div className="ScheduleSectionsub flex justify-between">
              <div className="ScheduleSection1 flex flex-row">
              <div className=" bg-white w-[0.5px] h-[50px] ml-[30px] mt-[30px]"></div>
                <div className="flex flex-col ml-[26px] mt-[25px] ">
                    <span className="text-white oswald1 leading-[1em] text-[20px]">Join Us</span>
                    <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">WORKOUT SCHEDULES</span>

                    <div className="mt-[48px]">
                        <img className="ScheduleSection1img h-[290px] w-[400px] rounded-xl shadow-md" src={ScheduleImage} alt="" />
                    </div>
                </div>
              </div>
                {/* Second */}

                <div className="ScheduleSection2 w-[500px] flex flex-col justify-center mr-[35px] mt-[30px]">
                    {
                        time.map((Day, index) => {
                            return (
                                <div key={Day} {...Day}>
                                    <div className="mr-[5px]">
                                        <div className="flex flex-row mt-[10px] justify-between border-b-2 border-white border-dotted ">
                                            <div className="">
                                            <li className="text-white oswald1 text-yellow-500 text-[15px]">{Day.day}</li>
                                            </div>
                                            <div className="ml-[70px]">
                                            <li className="list-none text-white oswald1 text-[15px] mt-[2px]">{Day.time}</li>
                                            </div>
                                        </div>

                                        {/* <div className="flex flex-row m-[-10px]">
                                            <li className="list-none text-yellow-500">{Day.line1}</li>
                                         
                                            <li className="list-none text-white">{Day.line2}</li>
                                         
                                        </div> */}
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

export default Schedule;