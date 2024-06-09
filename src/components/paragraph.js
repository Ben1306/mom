import useIntersectionObserver from "./observerHook";
import BlueSunflower from "../images/blue_sunflower.png";
import Flower from "./flower";

export default function Paragraph({title, text, image, flower1, flower2}) {

    const [setRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "-100px",
        threshold: 0.1,
    });

    return (
        <div ref={setRef} className="flex flex-col w-full items-center relative">
            <section
                className={`group transition duration-1000 w-full max-w-screen-lg font-handwritten flex flex-col gap-10  ${isIntersecting ? "translate-x-0 opacity-100" : "-translate-x-[100px] opacity-0"}`}>
                <div className="flex items-center gap-10 text-black text-6xl">{title} <img
                    className={`h-[80px] aspect-auto transition duration-500 -translate-x-[50%] opacity-0 group-hover:opacity-100 group-hover:translate-x-0`}
                    src={image} alt="penguin"/></div>
                <div className="text-white text-3xl">{text}</div>
            </section>
            <img src={flower1} alt="Flower" className={`w-16 absolute top-[20%] left-[5%] aspect-square`}/>
            <img src={flower2} alt="Flower" className={`w-16 absolute top-[80%] left-[5%] aspect-square`}/>
            <img src={flower1} alt="Flower" className={`w-16 absolute top-[20%] left-[90%] aspect-square`}/>
            <img src={flower2} alt="Flower" className={`w-16 absolute top-[80%] left-[90%] aspect-square`}/>
        </div>
    )
}