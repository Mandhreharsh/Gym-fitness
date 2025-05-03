import React, { useEffect, useState } from 'react';
import YearlyPriceInfo2 from "../components/YearlyPriceInfo2"
import data from "../data.json";


const YearlyCard2 = () => {

    const [price2, setPrice2] = useState([]);


    useEffect(() => {
        setPrice2(data.plan2);

    }, [])

    return (
        <div>
            <YearlyPriceInfo2 price2={price2}></YearlyPriceInfo2>
        </div>
    )
}

export default YearlyCard2;