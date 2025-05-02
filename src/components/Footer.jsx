import React from "react";
import Logo from "../images/Logo (2).png"
import { Link, NavLink } from "react-router-dom";
import Facebook from "../images/facebook.png";
import LinkedIn from "../images/linked in.png";
import Twitter from "../images/twitter.png";

const Footer = () => {
    return (
        <div className="bg-bgfooter FooterSection w-full bg-fixed bg-cover">
            <div className="flex  justify-center">
                <Link>
                    <img className="mt-[-40px]" height="300px" width="350px" src={Logo} alt="" />
                </Link>
            </div>
            <div className="flex Footertxt justify-center mt-[-60px]">
                <p className="text-white w-[800px] text-center bg-whi noto-sans">At Fitness, we are committed to helping you achieve your fitness goals in a supportive, motivating environment. Whether you're here to build strength, improve endurance, we provide expert training, top-tier equipment, and personalized fitness programs to guide you every step of the way.</p>
            </div>

            <div className="flex justify-center mt-[10px]">
                <h1 className="text-white oswald2 text-yellow-500 text-[30px]">
                    Quick Links
                </h1>
            </div>

            <div className="flex flex-row gap-[50px] flex flex-wrap mt-[20px] justify-center">
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/">Home</NavLink>
                </li>
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/classes">Classes</NavLink>
                </li>
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/trainers">Trainers</NavLink>
                </li>
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/pricing">Pricing</NavLink>
                </li>
                <li className="text-white list-none oswald1 text-[20px] hover:text-yellow-500">
                    <NavLink to="/contact">Contact</NavLink>
                </li>

            </div>

            <div className=" flex flex-row gap-[20px] justify-center mt-[35px]">

                <div className=" h-[20px] flex flex-col justify-center">
                    <div className="bg-white w-[50px] h-[0.5px]"></div>
                </div>


                <span>
                    <img className="w-[20px] h-[20px]" src={Facebook} alt="" />
                </span>

                <span>
                    <img className="w-[20px] h-[20px]" src={LinkedIn} alt="" />
                </span>

                <span>
                    <img className="w-[20px] h-[20px]" src={Twitter} alt="" />
                </span>

                <div className=" h-[20px] flex flex-col justify-center">
                    <div className="bg-white w-[50px] h-[0.5px]"></div>
                </div>

            </div>


            <footer className="h-[50px] mt-[42px] flex flex-col justify-center bg-gradient-to-tl from-[#12100e] to-[#3d3d3d]">
                <p className="text-center text-white">Copyright 2024 <span className="text-yellow-500 oswald1">Fitness</span>. All Rights Reserved.</p>
            </footer>
        </div>
    )
}
export default Footer;
