import Title from "./title";
import Sun from "../images/sun.png";
import BlueSunflower from "../images/blue_sunflower.png";
import BlueLys from "../images/blue_lys.png";
import GreenDaisy from "../images/green_daisy.png";
import RedLys from "../images/red_lys.png";
import RedSunflower from "../images/red_sunflower.png";
import VioletLys from "../images/violet_lys.png";
import YellowGolFlower from "../images/yellow_goldflower.png";
import YellowLys from "../images/yellow_lys.png";


import Flower from "./flower";

export default function Hero(props) {
    return (
        <div className="w-full flex flex-col gap-8 h-[800px] justify-center items-center relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <img src={Sun} className="h-[500px] w-144 animate-sun"
                     alt={"sun"}/>
            </div>
            <Title title={"Best"} className={"mr-80 relative z-10"} delay={8}/>
            <Title title={"Mom"} className={"relative z-10"} delay={10}/>
            <Title title={"Ever!"} className={"ml-80 relative z-10"} delay={9}/>

            <Flower className={"absolute top-[10%] left-[40%]"} delay={1} image={BlueSunflower}
                    imgClassName={"w-16 animate-spin-flower"}/>
            <Flower className={"absolute top-[70%] left-[80%]"} delay={6} image={BlueSunflower}
                    imgClassName={"w-14 animate-pulse-flower"}/>
            <Flower className={"absolute top-[80%] left-[50%]"} delay={2} image={BlueSunflower}
                    imgClassName={"w-12 animate-spin-flower"}/>
            <Flower className={"absolute top-[35%] left-[75%]"} delay={3} image={BlueSunflower}
                    imgClassName={"w-24 animate-pulse-flower"}/>
            <Flower className={"absolute top-[40%] left-[10%]"} delay={4} image={BlueSunflower}
                    imgClassName={"w-20 animate-spin-flower"}/>

            <Flower className={"absolute top-[80%] left-[30%]"} delay={5} image={GreenDaisy}
                    imgClassName={"w-16 animate-pulse-flower"}/>
            <Flower className={"absolute top-[10%] left-[60%]"} delay={1} image={GreenDaisy}
                    imgClassName={"w-12 animate-spin-flower"}/>
            <Flower className={"absolute top-[90%] left-[70%]"} delay={2} image={GreenDaisy}
                    imgClassName={"w-24 animate-pulse-flower"}/>

            <Flower className={"absolute top-[60%] left-[40%]"} delay={3} image={RedLys}
                    imgClassName={"w-20 animate-spin-flower"}/>
            <Flower className={"absolute top-[35%] left-[60%]"} delay={7} image={RedLys}
                    imgClassName={"w-24 animate-pulse-flower"}/>

            <Flower className={"absolute top-[15%] left-[10%]"} delay={1} image={VioletLys}
                    imgClassName={"w-32 animate-spin-flower"}/>
            <Flower className={"absolute top-[90%] left-[40%]"} delay={5} image={VioletLys}
                    imgClassName={"w-24 animate-pulse-flower"}/>
            <Flower className={"absolute top-[5%] left-[85%]"} delay={9} image={VioletLys}
                    imgClassName={"w-28 animate-spin-flower"}/>

            <Flower className={"absolute top-[50%] left-[30%]"} delay={7} image={YellowGolFlower}
                    imgClassName={"w-12 animate-pulse-flower"}/>
            <Flower className={"absolute top-[25%] left-[90%]"} delay={1} image={YellowGolFlower}
                    imgClassName={"w-14 animate-spin-flower"}/>
            <Flower className={"absolute top-[20%] left-[20%]"} delay={6} image={YellowGolFlower}
                    imgClassName={"w-8 animate-pulse-flower"}/>
            <Flower className={"absolute top-[85%] left-[20%]"} delay={2} image={YellowGolFlower}
                    imgClassName={"w-12 animate-spin-flower"}/>
            <Flower className={"absolute top-[55%] left-[65%]"} delay={4} image={YellowGolFlower}
                    imgClassName={"w-14 animate-pulse-flower"}/>
            <Flower className={"absolute top-[80%] left-[90%]"} delay={3} image={YellowGolFlower}
                    imgClassName={"w-8 animate-spin-flower"}/>

            <Flower className={"absolute top-[60%] left-[20%]"} delay={2} image={BlueLys}
                    imgClassName={"w-32 animate-pulse-flower"}/>
            <Flower className={"absolute top-[50%] left-[90%]"} delay={4} image={BlueLys}
                    imgClassName={"w-24 animate-spin-flower"}/>
            <Flower className={"absolute top-[10%] left-[65%]"} delay={6} image={BlueLys}
                    imgClassName={"w-28 animate-pulse-flower"}/>
            <Flower className={"absolute top-[5%] left-[5%]"} delay={8} image={BlueLys}
                    imgClassName={"w-16 animate-spin-flower"}/>

            <Flower className={"absolute top-[70%] left-[5%]"} delay={8} image={RedSunflower}
                    imgClassName={"w-36 animate-spin-flower"}/>
            <Flower className={"absolute top-[30%] left-[50%]"} delay={6} image={RedSunflower}
                    imgClassName={"w-24 animate-pulse-flower"}/>
            <Flower className={"absolute top-[55%] left-[75%]"} delay={5} image={RedSunflower}
                    imgClassName={"w-32 animate-spin-flower"}/>
            <Flower className={"absolute top-[5%] left-[25%]"} delay={4} image={RedSunflower}
                    imgClassName={"w-28 animate-spin-flower"}/>

            <Flower className={"absolute top-[30%] left-[20%]"} delay={7} image={YellowLys}
                    imgClassName={"w-20 animate-pulse-flower"}/>
            <Flower className={"absolute top-[80%] left-[80%]"} delay={5} image={YellowLys}
                    imgClassName={"w-24 animate-spin-flower"}/>
            <Flower className={"absolute top-[20%] left-[75%]"} delay={3} image={YellowLys}
                    imgClassName={"w-20 animate-pulse-flower"}/>


        </div>
    )
}