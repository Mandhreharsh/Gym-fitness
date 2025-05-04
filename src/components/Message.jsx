import React from "react";
import Location from "../images/location.png";
import Email from "../images/email.png";
import Phone1 from "../images/phone.png"
import Facebook from "../images/facebook.png";
import { useState } from 'react';
import { toast } from "react-hot-toast";
import axios from "axios";
import LinkedIn from "../images/linked in.png";
import Twitter from "../images/twitter.png";


const Message = () => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [Phone, setPhone] = useState("");
    const [message, setMessage] = useState("");

    const handleMessage = async (e) => {
        e.preventDefault();
        try {
            await axios.post(
                "https://gym-fitness-nhc9.onrender.com/api/v1/message/send",
                { firstName, lastName, Phone, email, message },
                {
                    withCredentials: true,
                    headers: {
                        "Content-Type": "application/json"
                    },
                }
            ).then(res => {
                toast.success(res.data.message);
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhone("");
                setMessage("");
            });
        } catch (error) {
            toast.error(error.response.data.message);
        }
    };


    return (
        <div className="MessageSectionMain overflow-x h-[590px] bg-transparent bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">

            <div className=" flex justify-center">
                <div className="MessageSection flex flex-row justify-between h-[450px] w-[1220px] mt-[60px] relative ">


                    <div className="MessageSection1 h-[450px] flex flex-col items-center">

                        <div className="MessageSubSection h-[390px] mt-[55px] ">
                            <div className=" w-[500px] h-[500px]">
                                <div className="relative">
                                    <div className="bg-white w-[0.5px] h-[50px] absolute top-[3px] left-[80px]"></div>
                                    <div className="flex flex-col ml-[105px] mt-[20px]">
                                        <span className="text-white oswald1 leading-[1em] text-[20px]">Find Us</span>
                                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">READY FOR WORKOUT</span>
                                    </div>

                                    <div className="ml-[103px] mt-[25px] flex flex-col gap-[5px]">
                                        <div className="flex flex-row gap-[15px]">
                                            <img className="h-[15px] w-[15px]" src={Phone1} alt="" />
                                            <p className="text-white">Phone - +1 910-626-85255</p>
                                        </div>
                                        <div className="flex flex-row  gap-[15px]">
                                            <img className="h-[15px] w-[15px]" src={Email} alt="" />
                                            <p className="text-white">Email - fitness@gmail.com</p>
                                        </div>
                                        <div className="flex flex-row  gap-[15px]">
                                            <img className="h-[15px] mt-[5px] w-[15px]" src={Location} alt="" />
                                            <p className="text-white">
                                                Address - 123 Fifth Avenue, New York
                                            </p>
                                        </div>

                                    </div>
                                </div>

                                <div className="relative mt-[40px]">
                                    <div className="bg-white w-[0.5px] h-[50px] absolute top-[3px] left-[80px]"></div>
                                    <div className="flex flex-col ml-[105px] mt-[20px]">
                                        <span className="text-white oswald1 leading-[1em] text-[20px]">Find Us</span>
                                        <span className="text-yellow500 oswald2 leading-[38px] text-[30px]">ON THE SOCIALS</span>
                                    </div>

                                    <div className="ml-[115px] mt-[30px] flex flex-row gap-[10px]">
                                        <span>
                                            <img className="w-[20px] h-[20px]" src={Facebook} alt="" />
                                        </span>

                                        <span>
                                            <img className="w-[20px] h-[20px]" src={LinkedIn} alt="" />
                                        </span>

                                        <span>
                                            <img className="w-[20px] h-[20px]" src={Twitter} alt="" />
                                        </span>

                                    </div>
                                </div>


                            </div>


                        </div>




                    </div>


                    <div className="MessageSection2 h-[440px]">
                        <div className=" mt-[30px] justify-center">

                            <div className="MessageSubsection p-[25px] ">

                                <form className="flex flex-wrap gap-4 justify-between mt-[10px]" action="" onSubmit={handleMessage}>

                                    <div className="flex flex-col w-[300px]">
                                        <label className="text-white" htmlFor="">First Name <sup>*</sup></label>
                                        <input className="MessageInput h-[35px] mt-[5px]"
                                            type="text"
                                            required
                                            value={firstName}
                                            onChange={(e) => setFirstName(e.target.value)} />
                                    </div>

                                    <div className="flex flex-col w-[300px]">
                                        <label className="text-white" htmlFor="">Last Name <sup>*</sup></label>
                                        <input className="MessageInput h-[35px] mt-[5px]"
                                            type="text"
                                            required
                                            value={lastName}
                                            onChange={(e) => setLastName(e.target.value)} />
                                    </div>

                                    <div className="flex flex-col w-[300px] mt-[5px]">
                                        <label className="text-white" htmlFor="">Email<sup>*</sup></label>
                                        <input className="MessageInput h-[35px] mt-[5px]"
                                            type="text"
                                            required
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)} />
                                    </div>

                                    <div className="flex flex-col w-[300px] mt-[5px]">
                                        <label className="text-white" htmlFor="">Phone Number <sup>*</sup></label>
                                        <input className="MessageInput h-[35px] mt-[5px]"
                                            type="text"
                                            required
                                            value={Phone}
                                            onChange={(e) => setPhone(e.target.value)} />
                                    </div>

                                    <div className="flex flex-col h-[300px]  w-[300px] ">
                                        <label className="text-white" htmlFor="">Message <sup>*</sup></label>
                                        <textarea className="MessageInput h-[100px] mt-[5px]"
                                            name=""
                                            id=""
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}></textarea>
                                    </div>

                                    <div className=" flex flex-col w-[300px] gap-[90px] mt-[50px]">
                                        <button className="MessageBtn bg-yellow-500 h-[50px]">Submit</button>
                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message;