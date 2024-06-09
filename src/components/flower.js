import {useEffect, useState} from "react";

export default function Flower({imgClassName, className, image, delay}) {

    const [showFlower, setShowFlower] = useState(false);
    useEffect(() => {
        setTimeout(()=>{
            setShowFlower(true);
        }, delay * 1000)
    }, [delay]);

    if (!showFlower) {
        return null;
    }

    return(
        <div className={`z-20 ${className}`}>
            <img src={image} alt="Flower" className={`aspect-square ${imgClassName}`} />
        </div>
    )
}