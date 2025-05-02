import React, { useEffect, useState } from "react";
import data from "../data.json"
import ContactSection from "../components/ContactSection";
import Message from "../components/Message";
import Footer from "../components/Footer";

const Contact = () => {

    const [contact, setContact] = useState([]);

   useEffect(() =>{
       setContact(data.ContactPart);

   }, [])

    return (
        <div>
            <div>
                <ContactSection contact={contact}></ContactSection>
            </div>
            <div>
                <Message></Message>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    )
}

export default Contact;