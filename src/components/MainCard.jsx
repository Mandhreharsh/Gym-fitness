import React, { useEffect, useState } from "react";
import MainCardInfo from "./MainCardInfo";
import data from "../data.json"

const MainCard = () => {

    const [mainprice, setMainPrice] = useState([]);


    useEffect(() => {
        setMainPrice(data.MainPlan);

    }, [])

    return (
        <div>
            <MainCardInfo mainprice={mainprice}></MainCardInfo>
        </div>
    )
}

export default MainCard;