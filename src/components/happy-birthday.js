import useIntersectionObserver from "./observerHook";
import CatVideo from "../images/cat.mp4"
import ParrotVideo from "../images/parrot.mp4"

export default function HappyBirthday({targetRef}) {

    const [setRef, isIntersecting] = useIntersectionObserver({
        rootMargin: "-100px",
        threshold: 0.1,
    });

    return (
        <div ref={targetRef} className="flex flex-col items-center h-[600px] overflow-hidden relative">
            <div ref={setRef}
                 className={`transition duration-1000 flex flex-col gap-14 text-center items-center font-handwritten text-white ${isIntersecting ? 'opacity-100 scale-100 translate-x-0' : 'opacity-0 scale-50 -translate-x-[50px]'}`}>
                <div className="text-8xl">{"Joyeux anniversaire Maman"}</div>
                <div
                    className="text-3xl max-w-screen-lg">{"Même si je ne suis pas présent pour le fêter avec toi, je te souhaite un très joyeux anniversaire 🥳"}</div>
                <div className="w-full flex items-center justify-around">
                    <video className="rounded-xl w-[400px]" id="bannerVideo" autoPlay muted loop>
                        <source src={CatVideo} type="video/mp4"/>
                    </video>
                    <video className="rounded-xl w-[400px]" id="bannerVideo" autoPlay muted loop>
                        <source src={ParrotVideo} type="video/mp4"/>
                    </video>
                </div>
            </div>
        </div>
    )
}