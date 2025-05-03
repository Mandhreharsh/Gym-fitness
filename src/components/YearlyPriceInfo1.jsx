import React from "react";
import price from "../images/price1.png"

const YearlyPriceInfo1 = ({ price1 }) => {
    return (
        <div >
            {
                price1.map((subscription, index) => {
                    return (
                        <div className="" key={subscription} {...subscription}>

                            <h1 className="text-center text-yellow500 oswald mt-[44px] text-[30px]">{subscription.heading}</h1>
                            <h6 className=" text-white oswald text-[14px] mt-[-8px] text-center">{subscription.coach}</h6>
                            <div>
                                <div className="flex flex-row items-center justify-center">
                                    <img className="h-[57px] w-[40px] mt-[6px]" src={subscription.image} alt="" />
                                    <h1 className="text-center oswald text-yellow500 mt-[5px] text-[60px]">{subscription.price1}</h1>
                                </div>
                            </div>
                            <li className=" text-center text-white text-[14px] oswald list-none mt-[-15px]">{subscription.year}</li>
                            <li className="text-center list-none oswald1 text-[16px] text-white mt-[30px]">{subscription.heading2}</li>
                            <div className="flex flex-column mt-[8px] justify-center">
                                <span className="bg-yellow500 w-[50px] h-[0.5px]"></span>
                            </div>
                            <ul className="mt-[12px]">
                                <li className="text-white noto-sans text-[14px] leading-[11px] text-center">{subscription.description1}</li>
                                <li className="text-white noto-sans text-[14px]  text-center"> {subscription.description2}</li>
                                <li className="text-white noto-sans text-[14px] leading-[11px] text-center">{subscription.description3}</li>
                            </ul>
                            <div className="flex flex-column justify-center mt-[29px]">
                                <button className="text-white bg-yellow500 h-[45px] w-[125px] text-[15px] oswald1 rounded-full">{subscription.btn}</button>
                            </div>
                            <div className=" absolute opacity-15 top-[245px] left-[140px] h-[200px] w-[200px]">
                                <img src={price} alt="" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default YearlyPriceInfo1;