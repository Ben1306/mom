import { useState, useEffect } from 'react';

const useIntersectionObserver = (options) => {
    const [ref, setRef] = useState(null);
    const [isIntersecting, setIsIntersecting] = useState(false);

    useEffect(() => {
        if (!ref) return;

        const observer = new IntersectionObserver(([entry]) => {
            if(!isIntersecting){
                setIsIntersecting(entry.isIntersecting);
            }
        }, options);

        observer.observe(ref);

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, isIntersecting];
};

export default useIntersectionObserver;
