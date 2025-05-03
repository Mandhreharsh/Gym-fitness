import React from "react";

const Successfull = ({ success }) => {
    return (
        <div className="bg-bgdumbell SuccessfullMainSection opacit y-90 bg-black h-[400px] bg-fixed w-full bg-cover">
            <div className="SuccessfullSection flex justify-center">
                <div className="SuccessfullSection1  flex flex-wrap gap-[200px] justify-center mt-[120px]">
                    {
                        success.map((Success1, Index) => {
                            return (
                                <div className="SuccessfullSection2 flex flex-col items-center" key={Success1} {...Success1}>
                                    <img className="h-[70px] w-[70px]" src={Success1.image} alt="" />
                                    <h1 className="text-white noto-sans oswald text-[40px]">{Success1.heading}</h1>
                                    <p className="text-white text-[17px] noto-sans">{Success1.description}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Successfull;