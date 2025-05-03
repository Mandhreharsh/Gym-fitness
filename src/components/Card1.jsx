import React, { useEffect, useState } from "react";
import data from "../data.json";

import PriceInfo1 from "./PriceInfo1";

const Card1 = () => {

    const [price1, setPrice1] = useState([]);


    useEffect(() => {
        setPrice1(data.plan1);

    }, [])

    return (
        <div>
            <PriceInfo1 price1={price1}></PriceInfo1>
        </div>
    )
}

export default Card1;