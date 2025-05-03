import React, { useEffect, useState } from 'react';
import PriceInfo2 from './PriceInfo2';
import data from "../data.json";


const Card2 = () => {

    const [price2, setPrice2] = useState([]);


    useEffect(() => {
        setPrice2(data.plan2);

    }, [])

    return (
        <div>
            <PriceInfo2 price2={price2}></PriceInfo2>
        </div>
    )
}

export default Card2;