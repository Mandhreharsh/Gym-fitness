import React from "react";

const ClassesHeading = ({ classesHeading }) => {
    return (
        <div className="ClassHeadingMain bg-main5 h-[788px] w-full mt-[-70px] flex flex-column justify-center bg-cover">
            <div className="ClassHeadingMain1 h-[300px] w-[1150px] mt-[290px] flex flex-row justify-between gap-x-[70px]">
                {/* first */}
                <div className="ClassHeadingSection1 h-[300px] w-[950px] flex flex-col justify-center">
                    <h1 className="ClassHeadingSection1txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">HARD ROCK</h1>
                    <h2 className="ClassHeadingSection1txt text-white text-[100px] leading-[1em] oswald  text-center">SHAPE UP</h2>
                </div>

                {/* second */}
                <div className=" ">
                    <div className="ClassHeadingSection2 h-[300px]">
                        <div className=" bg-white w-[0.5px] h-[50px] ml-[39px] mt-[px]"></div>
                        <div className="flex flex-col ml-[70px] mt-[-54px]">
                            <span className="text-white oswald1 leading-[1em] text-[20px]">Pro Selected</span>
                            <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">OUR CLASSES</span>
                        </div>

                        <div>
                            {
                                classesHeading.map((classHeading, index) => {
                                    return (
                                        <div className="ClassHeadingSectiontxt mt-[47px] ml-[70px] flex flex-col gap-[21px]" key={classHeading} {...classHeading}>
                                            <p className="ClassHeadingSectiontxt1 text-white text-[14px] noto-sans">{classHeading.heading1}</p>
                                            <p className="ClassHeadingSectiontxt1 text-white text-[14px] noto-sans">{classHeading.heading2}</p>
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

export default ClassesHeading;