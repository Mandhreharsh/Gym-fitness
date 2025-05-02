import React, { useEffect, useState } from "react";
import data from "../data.json";
import YearlyPriceInfo1 from "../components/YearlyPriceInfo1"

const YearlyCard1 = () => {

    const [price1, setPrice1] = useState([]);


    useEffect(() => {
        setPrice1(data.plan1);

    }, [])

    return (
       <div>
            <YearlyPriceInfo1 price1={price1}></YearlyPriceInfo1>
       </div>
    )
}

export default YearlyCard1;