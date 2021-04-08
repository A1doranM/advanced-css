import React from "react";
import {Sidebar} from "./components/Sidebar";
import {Header} from "./components/Header";
import {Realtors} from "./components/Realtors";
import {Features} from "./components/Features";
import {Story} from "./components/Story";
import {Homes} from "./components/Homes";
import {Gallery} from "./components/Gallery";
import {Footer} from "./components/Footer";

const App: React.FC = () => {
    return (
        <>
            <Sidebar/>
            <Header/>
            <Realtors/>
            <Features/>
            <Story/>
            <Homes/>
            <Gallery/>
            <Footer/>
        </>
    );
};

export default App;
