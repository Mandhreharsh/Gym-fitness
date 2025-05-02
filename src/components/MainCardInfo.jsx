import React from "react";

const MainCardInfo = ({mainprice}) => {
    return (
        <div>
        {
            mainprice.map((mainSubscription, index) => {
                return (
                   
                    <div key={mainSubscription} {...mainSubscription}>
                    <h6 className="text-[#3D3D3D] text-center oswald leading-[9px] text-[14px] mt-[67px]">{mainSubscription.smallheading}</h6>
                    <h1 className="text-center oswald text-[30px]">{mainSubscription.heading}</h1>
                    <h6 className="text-[#3D3D3D] oswald text-[14px] mt-[-8px] text-center">{mainSubscription.coach}</h6>
                    <div className="flex flex-row items-center justify-center gap-[4px]">
                    <img className="h-[74px] w-[50px] mt-[4px]" src={mainSubscription.image} alt="" />
                    <h1 className="text-center oswald text-[80px]">{mainSubscription.price}</h1>
                    </div>
                    <li className="text-[#3D3D3D] text-center text-[14px] oswald list-none mt-[-20px]">{mainSubscription.month}</li>
                    <li className="text-center list-none oswald1 text-[16px] mt-[30px]">{mainSubscription.heading2}</li>
                    <div className="flex flex-column mt-[11px] justify-center">
                        <span className="bg-black w-[50px] h-[0.5px]"></span>
                    </div>
                    <ul className="mt-[12px]">
                        <li className="text-[#3D3D3D] noto-sans text-[14px] leading-[10px] text-center">{mainSubscription.description1}</li>
                        <li className="text-[#3D3D3D] noto-sans text-[14px]  text-center">{mainSubscription.description2}</li>
                        <li className="text-[#3D3D3D] noto-sans text-[14px] leading-[10px] text-center">{mainSubscription.description3}</li>
                    </ul>
                    <div className="flex flex-column justify-center mt-[25px]">
                        <button className="text-white bg-black h-[45px] w-[125px] text-[15px] oswald1 rounded-full">{mainSubscription.btn}</button>
                    </div>
                </div>
            
                )
            })
        }
</div>
    )
}

export default MainCardInfo;