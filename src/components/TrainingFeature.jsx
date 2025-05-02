import React from "react";

const Classes = ({Allfeature}) => {
    return (
        <div className="TrainingFeatureMain w-full h-[860px] relative bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">
            <div className="TrainingFeatureSection1">
                <div className="flex flex-col items-center">
                <div className="bg-white w-[0.5px] h-[50px] mt-[110px]"></div>
                    <span className="text-white oswald1 leading-[1em] mt-[11px] text-white text-[20px]">Awesome Features</span>
                    <h1 className="text-yellow500 oswald2 leading-[38px] text-[30px]">WHY CHOOSE US</h1>
                </div>
            </div>
            <div className=" flex justify-center">
            <div className="TrainingFeatureSection1 ml-[px] mt-[48px] flex felx-row flex-wrap justify-center gap-x-[60px] gap-y-[45px] w-[1100px]">
                        {
                            Allfeature.map((features, index) => {
                                return (
                                    <div className="TrainingFeatureSubSection flex justify-center items-center bg-black h-[230px] w-[450px] gap-[15px] rounded-[15px] shadow-md shadow-black " key={features} {...features}>
                                       <div className="flex flex-col justify-center items-center">
                                       <img className="h-[55px] w-[55px]" src={features.image} alt="" />
                                       <div className="flex flex-col gap-[12px]">
                                       <p className="text-white text-[14px] noto-sans oswald text-xl text-center text-yellow-500">{features.heading}</p>
                                       <p className="text-white text-[14px] noto-sans text-center">{features.description2}</p>
                                       </div>
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

export default Classes;
// absolute top-[109px] left-[759px]