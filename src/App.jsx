import {useState, useEffect} from "react";
import {Navigation} from "./components/navigation";
import {Header} from "./components/header";
import {Features} from "./components/features";
import {About} from "./components/about";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";
import {Workflow} from "./components/workflow";
import {Contact} from "./components/contact";
import {Call} from "./components/call";

export const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 1000,
    speedAsDuration: true,
});

const App = () => {
    const [landingPageData, setLandingPageData] = useState({});
    useEffect(() => {
        setLandingPageData(JsonData);
    }, []);

    return (
        <div>
            <Navigation/>
            <Header data={landingPageData.Header}/>
            <About data={landingPageData.About}/>
            <Call/>
            <Features data={landingPageData.Features}/>
            <Workflow data={landingPageData.Plan}/>
            <Contact data={landingPageData.Contact}/>
        </div>
    );
};

export default App;
