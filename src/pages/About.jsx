import React, { useState, useEffect } from "react";
import data from "../data.json";
import AboutUs from "../components/AboutUs";
import Overview from "../components/Overview";
import OurTeam from "../components/OurTeam";
import TestimonialList from "../components/TestimonialsList";
import Footer from "../components/Footer"


const About = () => {

    const [about, setAbout] = useState([]);
    const [Teams, setTeams] = useState([]);
    const [study, setStudy] = useState([]);


    useEffect(() => {
        setAbout(data.Summery);
        setTeams(data.OurTeam);
        setStudy(data.Overview)

    }, [])
    return (
        <div>
            <div>
                <AboutUs about={about}></AboutUs>
            </div>
            <div>
                <Overview study={study}></Overview>
            </div>
            <div>
                <TestimonialList></TestimonialList>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default About;