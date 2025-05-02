import React from "react";
import price from "../images/price2.png";

const PriceInfo2 = ({price2}) => {
    return (
        <div>
        {
            price2.map((subscription2, index) => {
                return (
                    <div className="Price2 relative" key={subscription2} {...subscription2}>

                        <h1 className="text-center text-yellow500 oswald mt-[44px] text-[30px]">{subscription2.heading}</h1>
                        <h6 className=" text-white oswald text-[14px] mt-[-8px] text-center">{subscription2.coach}</h6>
                        <div className="flex flex-row items-center justify-center">
                            <img className="h-[57px] w-[40px] mt-[6px]" src={subscription2.image} alt="" />
                            <h1 className="text-center oswald text-yellow500 mt-[5px] text-[60px]">{subscription2.price}</h1>
                        </div>
                        <li className=" text-center text-white text-[14px] oswald list-none mt-[-15px]">{subscription2.month}</li>
                        <li className="text-center list-none oswald1 text-[16px] text-white mt-[30px]">{subscription2.heading2}</li>
                        <div className="flex flex-column mt-[8px] justify-center">
                            <span className="bg-yellow500 w-[50px] h-[0.5px]"></span>
                        </div>
                        <ul className="mt-[12px]">
                            <li className="text-white noto-sans text-[14px] leading-[11px] text-center">{subscription2.description1}</li>
                            <li className="text-white noto-sans text-[14px]  text-center"> {subscription2.description2}</li>
                            <li className="text-white noto-sans text-[14px] leading-[11px] text-center">{subscription2.description3}</li>
                        </ul>
                        <div className="flex flex-column justify-center mt-[29px]">
                            <button className="text-white bg-yellow500 h-[45px] w-[125px] text-[15px] oswald1 rounded-full">{subscription2.btn}</button>
                        </div>
                        <div className="PriceImage2 absolute opacity-15 top-[205px] left-[140px] h-[200px] w-[200px]">
                            <img src={price} alt="" />
                        </div>
                    </div>
                )
            })
        }
    </div>
    )
}

export default PriceInfo2;