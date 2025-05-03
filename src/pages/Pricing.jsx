import React, { useEffect, useState } from "react";
import PricingHeading from "../components/PricingHeading";
import data from "../data.json"
import PricingSection from "../components/PricingSection";
import SuccessfullList from "../components/SuccessfullList";
import YearlyPlan from "../components/YearlyPlan";
import Footer from "../components/Footer";

const Pricing = () => {

    const [pricingHead, setPricingHead] = useState([]);


    useEffect(() => {
        setPricingHead(data.pricingPart);


    }, [])
    return (
        <div>
            <div>
                <PricingHeading pricingHead={pricingHead}></PricingHeading>
            </div>

            <div>
                <PricingSection></PricingSection>
            </div>

            <div>
                <SuccessfullList></SuccessfullList>
            </div>

            <div>
                <YearlyPlan></YearlyPlan>
            </div>

            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Pricing;