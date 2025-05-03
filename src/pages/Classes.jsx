import React, { useEffect, useState } from "react";
import ClassesHeading from "../components/ClassesHeading";
import ClassesSection from "../components/ClassesSection";
import data from "../data.json";
import Schedule from "../components/Schedule";
import SuccessfullList from "../components/SuccessfullList";
import Footer from "../components/Footer";

const Classes = () => {
    const [classesHeading, setClassesHeading] = useState([]);
    const [classesList, setClassesList] = useState([]);
    const [time, setTime] = useState([]);

    useEffect(() => {
        setClassesHeading(data.ClassesHeading);
        setClassesList(data.ClassesList);
        setTime(data.Schedule)
    }, [])
    return (
        <div>
            <div>
                <ClassesHeading classesHeading={classesHeading}></ClassesHeading>
            </div>

            <div>
                <ClassesSection classesList={classesList}></ClassesSection>
            </div>

            <div>
                <SuccessfullList></SuccessfullList>
            </div>
            <div>
                <Schedule time={time}></Schedule>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Classes;