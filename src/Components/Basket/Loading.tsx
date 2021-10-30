import React, { useState, useEffect } from "react";


export const Loading = () => {
    const [stops, setStops] = useState<number>(0);

    useEffect(() => {
        setInterval(() => setStops((currentState: number) => currentState + 1), 500)
    }, [])
    return (
        <p>Loading{Array.from(Array(stops).keys()).map((_, index) => {
            if ((index % 50 !== 0) || index === 0) return '.';
            else setStops(0);
        })}</p>
    )
}
