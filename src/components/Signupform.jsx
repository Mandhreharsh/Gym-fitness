import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Signupform = ({setIsLoggedIn}) => {
    const navigate = useNavigate();
    const [formData, setformData] = useState({
        email:"",
        password:"",
        confirmPassword:"",
    })

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    function changeHandler(event) {
        setformData( (prevData) => (
            {
                ...prevData,
                [event.target.name]:event.target.value
            }
        ))
    }

    async function submitHandler(event) {
        event.preventDefault();
        

        if (formData.password !== formData.confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        try {
            const response = await axios.post("http://localhost:7000/api/v1/user/patient/register", {
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword,
            });

            toast.success(response.data.message);
            setIsLoggedIn(false);
            navigate("/login");

        } catch (error) {
            toast.error(error.response?.data?.message || "Signup failed");
        }
    }
    return (
        <div>
            <form className="bg-whit w-[280px] h-[330px]" action="" onSubmit={submitHandler}>

                <div className="mt-[-90px]">
                    <div className="text-[50px] oswald ml-[90px] text-[#D6D1CC] "><strong>SignUp</strong></div>
                </div>

                <div className="mt-[30px] flex flex-col gap-[25px]">



                    <div className=" flex flex-col">
                        <label className="text-white" htmlFor="">Email Address <sup>*</sup></label>
                        <input className="w-full h-[35px] bg-transparent border-b-2 border-white outline-none text-white"
                            required
                            type='email'
                            name='email'
                            onChange={changeHandler}
                            placeholder='Enter Email Address'
                            value={formData.email} />
                    </div>

                    <div className=" flex flex-col relative">
                        <label className="text-white " htmlFor="">Password <sup>*</sup></label>
                        <input className="w-full h-[35px] bg-transparent border-b-2 border-white outline-none text-white"
                           required
                           type={showPassword ? ("text") : ("password")}
                           name='password'
                           onChange={changeHandler}
                           placeholder='Enter Password'
                           value={formData.password}/>

                        <span className='absolute right-5 top-[28px] cursor-pointer'
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </div>

                    <div className=" flex flex-col relative">
                        <label className="text-white " htmlFor="">Confirm Password <sup>*</sup></label>
                        <input className="w-full h-[35px] bg-transparent border-b-2 border-white outline-none text-white"
                           required
                           type={showConfirmPassword ? ("text") : ("password")}
                           name='confirmPassword'
                           onChange={changeHandler}
                           placeholder='Confirm Password'
                           value={formData.confirmPassword}/>

                        <span className='absolute right-5 top-[28px] cursor-pointer'
                            onClick={() => setShowConfirmPassword((prev) => !prev)}>
                            {showConfirmPassword ? (<AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF' />) : (<AiOutlineEye fontSize={24} fill='#AFB2BF' />)}
                        </span>
                    </div>
                </div>

                <div className="mt-[60px] flex justify-center">
                    <button className="text-center bg-[#D6D1CC] w-full h-[40px] rounded-[10px] bg-linear-to-r from-cyan-500 to-blue-500">Create Account</button>
                </div>

                <span className="mt-[30px] flex justify-end text-white">
  Already have an Account?
  <Link to="/login">
    <strong className="ml-1 underline cursor-pointer">Login</strong>
  </Link>
</span>


            </form>
        </div>
    )
}

export default Signupform;