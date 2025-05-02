import React, { useEffect, useState } from "react";
import data from "../data.json"
import Successfull from "./Successful";

const SuccessfullList = () => {

     const [success, setSuccess] = useState([]);

     useEffect(() =>{
        setSuccess(data.Successfull);
    }, [])
    return (
        <div>
            <div>
                <Successfull success={success}></Successfull>
            </div>
        </div>
    )
}

export default SuccessfullList;