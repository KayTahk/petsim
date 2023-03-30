import PetCustomizations from "./PetCustomizations";
import { useState } from "react";
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

    return (
            <div className="container">
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <Link to='/'>Customize Pet</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pet-care'>Pet Care</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/pet-games'>Pet Games</Link>
                    </li>
                </ul>
                <div className='home-body'>
                    <div className='pet-image-stats'>
                        <PetImage colorChoice={colorChoice} earChoice={earChoice} eyeChoice={eyeChoice} mouthChoice={mouthChoice} />
                        <Stats />
                    </div>
                </div>
                <Routes>
                    <Route path='/' element={<PetCustomizations colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice} mouthChoice={mouthChoice} setMouthChoice={setMouthChoice}/>}/>
                    <Route path='/pet-care' element={<Care colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice} mouthChoice={mouthChoice} setMouthChoice={setMouthChoice}/>}/>
                    <Route path='/pet-games' element={<Games colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice} mouthChoice={mouthChoice} setMouthChoice={setMouthChoice}/>}/>
                </Routes>
            </div>
    );
};

export default MenuNav;