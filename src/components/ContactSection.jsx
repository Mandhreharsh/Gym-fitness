import React from "react";

const ContactSection = ({contact}) => {
    return (
        <div className="ContactSectionMain bg-main5 h-[788px] w-full mt-[-70px] flex flex-column justify-center bg-cover">
        <div className="ContactSection h-[300px] w-[1150px] mt-[290px] flex flex-row justify-between gap-[50px]">
            {/* first */}
            <div className="ContactSection1 w-[1251px] h-[300px] flex flex-col justify-center">
                    <h1 className="ContactSection2txt text-white text-[100px] leading-[1em] oswald text-center text-yellow500">GET THE</h1>
                    <h2 className="ContactSection2txt text-white text-[100px] leading-[1em] oswald  text-center">SHAPE</h2>
            </div>

            {/* second */}
            <div className=" h-[300px] ">
            <div className=" h-[500px]">
                <div className=" bg-white w-[0.5px] h-[50px] ml-[17px] mt-[25px]"></div>
                     <div className="flex flex-col ml-[49px] mt-[-54px]">
                        <span className=" text-white oswald1 leading-[1em] text-[20px]">Contact</span>
                        <span className=" text-yellow500 oswald2 leading-[38px] text-[30px]">GET IN TOUCH</span>
                     </div>

                    <div>
                        {
                            contact.map((contacts, index) => {
                                return (
                                    <div className="mt-[45px] ml-[49px] flex flex-col " key={contacts} {...contacts}>
                                        <p className="text-white text-[14px] noto-sans">{contacts.description}</p>
                                        <p className="text-white text-[14px] mt-[-12px] noto-sans">{contacts.description1}</p>
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

export default ContactSection;