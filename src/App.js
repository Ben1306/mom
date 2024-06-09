import './App.css';
import Hero from "./components/hero";
import AnimatedCursor from "react-animated-cursor";
import GoToText from "./components/GoToText";
import HappyBirthday from "./components/happy-birthday";
import {useRef} from "react";
import Paragraph from "./components/paragraph";
import {alexText, benjaminText} from "./components/texts";
import Penguin from "./images/penguin.png";
import Fox from "./images/fox.png";
import Us from "./images/us.jpg";
import BlueLys from "./images/blue_lys.png";
import YellowGolFlower from "./images/yellow_goldflower.png";
import RedSunflower from "./images/red_sunflower.png";
import GreenDaisy from "./images/green_daisy.png";


function App() {

    const targetRef = useRef(null);

    const scrollToComponent = () => {
        if (targetRef.current) {
            targetRef.current.scrollIntoView({behavior: 'smooth', block: "center"});
        }
    };

    return (
        <div className="flex flex-col items-center bg-pink-300 gap-24">
            <AnimatedCursor
                innerSize={12}
                outerSize={60}
                innerScale={0.7}
                outerScale={1.5}
                color='255, 255, 255'
                clickables={[
                    'button',
                    'section'
                ]}
            />
            <Hero/>
            <GoToText onClick={scrollToComponent}/>
            <HappyBirthday targetRef={targetRef}/>
            <Paragraph title="Boubou" text={benjaminText} image={Penguin} flower1={BlueLys} flower2={YellowGolFlower}/>
            <Paragraph title="Alex" text={alexText} image={Fox} flower1={GreenDaisy} flower2={RedSunflower}/>
            <img className="w-[600px] rounded-xl mb-24" src={Us} alt="us"/>
        </div>
    );
}

export default App;
