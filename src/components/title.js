import {useEffect, useState} from "react";

export default function Title({ title, className, delay }) {

    const [showTitle, setShowTitle] = useState(false);
    useEffect(() => {
        setTimeout(()=>{
            setShowTitle(true);
        }, delay * 1000)
    }, [delay]);

    if (!showTitle) {
        return <div className="h-[128px]"/>
    }

    return(
        <div className={`animate-title font-handwritten text-9xl text-white ${className}`}>{title}</div>
    )
}