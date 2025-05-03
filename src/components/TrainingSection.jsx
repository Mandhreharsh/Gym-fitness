import React from "react";

const TrainingSection = ({ classesHeading }) => {
    return (
        <div className="TrainingSectionMain bg-main5 h-[788px] w-full mt-[-70px] flex flex-column justify-center bg-cover">
            <div className="TrainingSubSection h-[300px] w-[1050px] gap-[60px] mt-[290px] flex flex-row justify-between">
                {/* first */}
                <div className="TrainingSection1 w-[500px] h-[300px] flex flex-col justify-center">
                    <h1 className="TrainingSection1txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">ELITE</h1>
                    <h2 className="TrainingSection1txt text-white text-[100px] leading-[1em] oswald  text-center">TRAINERS</h2>
                </div>

                {/* second */}
                <div className="TrainingSection2 h-[320px] ">
                    <div className=" h-[500px]">
                        <div className=" bg-white w-[0.5px] h-[50px] ml-[39px] mt-[35px]"></div>
                        <div className="flex flex-col ml-[70px] mt-[-54px]">
                            <span className="text-white oswald1 leading-[1em] text-[20px]">Expert Team</span>
                            <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">OUR TRAINERS</span>
                        </div>

                        <div>
                            {
                                classesHeading.map((classHeading, index) => {
                                    return (
                                        <div className="mt-[47px] ml-[70px] flex flex-col gap-[21px] " key={classHeading} {...classHeading}>
                                            <p className="text-white text-[14px] noto-sans">{classHeading.heading1}</p>
                                            <p className="text-white text-[14px] noto-sans">{classHeading.heading2}</p>
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

export default TrainingSection;