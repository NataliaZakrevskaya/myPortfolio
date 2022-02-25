import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import {NextSection} from "./common/components/NextSection/NextSection";

function App() {
    return (
        <div className="App">
            <div className="Wrapper">
                <Header/>
                <div className="Content">
                    <Main/>
                    <NextSection/>
                    <Skills/>
                    <NextSection/>
                    <Projects/>
                    <NextSection/>
                    <Contact/>
                    <NextSection/>
                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default App;
