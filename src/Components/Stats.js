import './PetImage.css'
import { useState, useEffect } from 'react';

function Stats(props) {

    /* Sets age */

    const [minutes, setMinutes] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {setMinutes(minutes => minutes + 1);}, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="Stats">
            <header className="stats-header">Stats</header>
            <ul className='stats-list'>
                <li className='stat'>💖: {props.clickCount}</li>
                <li className='stat'>Age: {minutes} mins</li>
                <li className='stat'>Games: {props.gamesCount}</li>
                <li className='stat'>Energy: {props.energyState}</li>
                <li className='stat'>Hunger: {props.hungerState}</li>
            </ul>
        </div>
    );
};

export default Stats;