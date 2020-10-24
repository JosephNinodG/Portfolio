import React from "react";
import Header from "../components/header";

export default function About() {
    return(
        <Layout>
            <Header headerText="About me" /> 
            <p>This is where I would talk about who I am</p>
        </Layout>
    );
}