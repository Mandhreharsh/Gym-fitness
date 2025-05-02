import React, { useEffect, useState } from "react";
import TrainingSection from "../components/TrainingSection";
import data from "../data.json";
import TrainingFeature from "../components/TrainingFeature";
import OurTrainers from "../components/OurTrainers";
import Footer from "../components/Footer"

const Trainers = () => {

        const [classesHeading, setClassesHeading] = useState([]);
        const [Allfeature, setAllFeature] = useState([]);
        const [AllTrainers, setAllTrainers] = useState([]);
    
        useEffect(() =>{
            setClassesHeading(data.ClassesHeading);
            setAllFeature(data.AwsomeFeatures);
            setAllTrainers(data.ExpertTrainers);
        }, [])
    

    return (
        <div>
          <div>
            <TrainingSection classesHeading={classesHeading}></TrainingSection>
          </div>

          <div>
            <TrainingFeature Allfeature={Allfeature}></TrainingFeature>
          </div>

          <div>
            <OurTrainers AllTrainers={AllTrainers}></OurTrainers>
          </div>
          <div>
            <Footer></Footer>
          </div>
        </div>
    )
}

export default Trainers;