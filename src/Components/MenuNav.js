import PetCustomizations from "./PetCustomizations";
import { useState, useEffect } from "react";
import Care from "./Care"
import Games from "./Games"
import PetImage from './PetImage';
import Stats from './Stats';
import { Link, Route, Routes } from "react-router-dom";

function MenuNav() {

    /* Sets color state */

    const [colorChoice, setColorChoice] = useState("#EAE0DA")

    /* Sets ear state */

    const [earChoice, setEarChoice] = useState('50% 50% 0% 50%')

     /* Sets eye state */

    const [eyeChoice, setEyeChoice] = useState('cute')

    /* Sets mouth state */

    const [mouthChoice, setMouthChoice] = useState('happy')

    /* Sets click state */

    const [clickCount, setClickCount] = useState(0)

    /* Sets games played state */

    const [gamesCount, setGamesCount] = useState(0)

    /* Sets games button disable state */

    const [disableGame, setDisableGame] = useState('');

    /* Sets energy state */

    const [energyState, setEnergyState] = useState('Awake')

    /* Sets hunger state */

    const [hungerState, setHungerState] = useState('Full')

    /* Sets games button to disabled, Hunger to be hungry and energy to sleepy every 3 games */

    useEffect(() => {
        if (gamesCount > 0 && gamesCount % 3 === 0) {
            setDisableGame('disabled');
            setHungerState('Hungry');
            setEnergyState('Sleepy');
        } else {
            setDisableGame('');
            setHungerState('Full');
            setEnergyState('Awake');
        }
        }, [gamesCount, setDisableGame]);

        useEffect(() => {
            if (hungerState === 'Full' && energyState === 'Awake') {
                setDisableGame('');
            } else {
                setDisableGame('disabled');
            }
            }, [hungerState, energyState, setDisableGame]);


    /* Sets Nav selected state for the focus underline */

    const [selectedNavItem, setSelectedNavItem] = useState('/');

    return (
            <div className="container">
                <ul className='nav-list'>
                    <li className={`nav-item ${selectedNavItem === '/' ? 'selected' : ''}`}>
                        <Link to='/' onClick={() => setSelectedNavItem('/')}>Customize Pet</Link>
                    </li>
                    <li className={`nav-item ${selectedNavItem === '/pet-care' ? 'selected' : ''}`}>
                        <Link to='/pet-care' onClick={() => setSelectedNavItem('/pet-care')}>Pet Care</Link>
                    </li>
                    <li className={`nav-item ${selectedNavItem === '/pet-games' ? 'selected' : ''}`}>
                        <Link to='/pet-games' onClick={() => setSelectedNavItem('/pet-games')}>Pet Games</Link>
                    </li>
                </ul>
                <div className='home-body'>
                    <div className='pet-image-stats'>
                        <PetImage colorChoice={colorChoice} earChoice={earChoice} eyeChoice={eyeChoice} mouthChoice={mouthChoice} clickCount={clickCount} setClickCount={setClickCount} />
                        <Stats clickCount={clickCount} gamesCount={gamesCount} hungerState={hungerState} energyState={energyState} />
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<PetCustomizations colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice} mouthChoice={mouthChoice} setMouthChoice={setMouthChoice}/>}/>
                    <Route path='/pet-care' element={<Care setEnergyState={setEnergyState} setHungerState={setHungerState} energyState={energyState} hungerState={hungerState} />}/>
                    <Route path='/pet-games' element={<Games setGamesCount={setGamesCount} gamesCount={gamesCount} hungerState={hungerState} setHungerState={setHungerState} energyState={energyState} setEnergyState={setEnergyState} disableGame={disableGame} setDisableGame={setDisableGame} />}/>
                </Routes>
            </div>
    );
};

export default MenuNav;