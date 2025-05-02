import React, { useEffect, useState } from "react";
import YearlyMainCardInfo from "../components/YearlyMainPriceInfo"
import data from "../data.json"

const YearlyMainCard = () => {

    const [mainprice, setMainPrice] = useState([]);


    useEffect(() => {
        setMainPrice(data.MainPlan);

    }, [])

    return(
        <div>
            <YearlyMainCardInfo mainprice={mainprice}></YearlyMainCardInfo>
        </div>
    )
}

export default YearlyMainCard;