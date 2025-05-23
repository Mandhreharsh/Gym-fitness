import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Loginform = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({ email: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);

    function changeHandler(event) {
        setformData(prev => ({ ...prev, [event.target.name]: event.target.value }));
    }

    async function submitHandler(event) {
        event.preventDefault();
        if (!formData.email || !formData.password) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const response = await axios.post("https://gym-fitness-iovs.onrender.com/api/v1/user/login", {
                email: formData.email,
                password: formData.password
            });

            toast.success(response.data.message);
            localStorage.setItem("token", response.data.token);
            setIsLoggedIn(true);

            // ✅ Navigate to OTP with email
            navigate("/otp", { state: { email: formData.email } });

        } catch (error) {
            toast.error(error.response?.data?.message || "Login failed");
        }
    }

    return (
        <div>
            <form className="bg-whit w-[280px] h-[330px] mt-[70px]" onSubmit={submitHandler}>
                <div className="mt-[-90px]">
                    <div className="text-[50px] oswald ml-[90px] text-[#D6D1CC] "><strong>Login</strong></div>
                </div>

                <div className="mt-[30px] flex flex-col gap-[25px]">
                    <div className="flex flex-col">
                        <label className="text-white">Email Address <sup>*</sup></label>
                        <input className="w-full h-[35px] bg-transparent border-b-2 border-white outline-none text-white"
                            required type="text" value={formData.email} onChange={changeHandler} name='email' placeholder='Enter Email id' />
                    </div>

                    <div className="flex flex-col relative">
                        <label className="text-white">Password <sup>*</sup></label>
                        <input className="w-full h-[35px] bg-transparent border-b-2 border-white outline-none text-white"
                            required type={showPassword ? "text" : "password"} value={formData.password}
                            onChange={changeHandler} name='password' placeholder='Enter Password' />
                        <span className='absolute right-5 top-[28px] cursor-pointer'
                            onClick={() => setShowPassword(prev => !prev)}>
                            {showPassword ? <AiOutlineEye fontSize={24} fill='#AFB2BF' /> : <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />}
                        </span>
                    </div>
                </div>

                <div className="mt-[60px] flex justify-center">
                    <button className="text-center bg-[#D6D1CC] w-full h-[40px] rounded-[10px]">Submit</button>
                </div>

                <span className="mt-[30px] flex justify-end text-white">
                    Don't have an Account?
                    <Link to="/signup"><strong className="ml-1 underline cursor-pointer">SignUp</strong></Link>
                </span>
            </form>
        </div>
    );
}

export default Loginform;
