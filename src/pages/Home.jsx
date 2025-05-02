import React, { useEffect, useState } from "react";
import Section from "../components/Section";
import Story from '../components/Story';
import Features from "../components/Features";
import data from "../data.json";
import Classes from "../components/Calsses";
import OurTeam from "../components/OurTeam";
import Testimonials from "../components/Testimonials";
import Price from "../components/Price";
import News from "../components/News";
import Footer from "../components/Footer";
import SuccessfullList from "../components/SuccessfullList";


const Home = () => {
    const [aboutUs, setAboutUs] = useState([]);
    const [feature, setFeature] = useState([]);
    const [classes, setClasses] = useState([]);
    const [Teams, setTeams] = useState([]);

    useEffect(() =>{
       setAboutUs(data.story);
       setFeature(data.AwsomeFeatures);
       setClasses(data.OurClasses);
       setTeams(data.OurTeam);
    }, [])
    return (
        <div>
           <div>
            <Section></Section>
           </div>

           <div>
            <Story aboutUs={aboutUs}></Story>
           </div>
           <div>
            <Features feature={feature}></Features>
           </div>
           <div>
            <Classes classes={classes}></Classes>
           </div>
           <div>
            <SuccessfullList></SuccessfullList>
           </div>
           <div>
            <OurTeam Teams={Teams}></OurTeam>
           </div>
           <div>
            <Testimonials></Testimonials>
           </div>
           <div>
            <Price></Price>
           </div>
           <div>
            <News></News>
           </div>
           <div>
            <Footer></Footer>
           </div>
        </div>
    )
}

export default Home;