import PetCustomizations from "./PetCustomizations";
import { useState } from "react";
import Care from "./Care"
import Games from "./Games"
import { Link, Route, Routes } from "react-router-dom";

function MenuNav() {

    /* Sets color state */

    const [colorChoice, setColorChoice] = useState("#EAE0DA")

    /* Sets ear state */

    const [earChoice, setEarChoice] = useState('50% 50% 0% 50%')

     /* Sets eye state */

    const cuteEyeDefault = {width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeHover = {width: '65px', height: '65px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeFocus = {width: '65px', height: '35px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeShine = {content: "", display: "block", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%", position: "absolute", top: "30%", left: "30%", transform: "translate(-50%, -50%)"}
    const [eyeChoice, setEyeChoice] = useState({hoverDefaultValue: cuteEyeDefault, hoverValue: cuteEyeHover, focusValue: cuteEyeFocus, eyeShineStyle: cuteEyeShine})

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
                <Routes>
                    <Route path='/' element={<PetCustomizations colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice}/>}/>
                    <Route path='/pet-care' element={<Care colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice}/>}/>
                    <Route path='/pet-games' element={<Games colorChoice={colorChoice} setColorChoice={setColorChoice} earChoice={earChoice} setEarChoice={setEarChoice} eyeChoice={eyeChoice} setEyeChoice={setEyeChoice}/>}/>
                </Routes>
            </div>
    );
};

export default MenuNav;