import Select from 'react-select';
import PetImage from './PetImage';
import Stats from './Stats';
import './PetImage.css'
import { useState } from 'react';

function PetCustomizations(props) {

    /* Sets eye options */

    const colorChoice = props.colorChoice;
    const setColorChoice = props.setColorChoice;
    const color = [
        { value: '#EAE0DA', label: '🐀 Grey' },
        { value: '#C1A58C', label: '🐻 Brown' },
        { value: '#A0C3D2', label: '🐟 Blue' }
    ];

    /* Sets ear options */

    const earChoice = props.earChoice;
    const setEarChoice = props.setEarChoice;
    const earShape = [
        { value: "50% 50% 0% 50%", label: '🐶 Puppy' },
        { value: "50% 50% 50% 50%", label: '🐭 PomPom' },
        { value: "0% 50% 50% 50%", label: '🐽 Piggy' }
    ];

    /* Sets eye state */

    const eyeChoice = props.eyeChoice;
    const setEyeChoice = props.setEyeChoice;

    const cuteEyeDefault = {width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeHover = {width: '65px', height: '65px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeFocus = {width: '65px', height: '35px', backgroundColor: 'black', borderRadius: '100px'}
    const cuteEyeShine = {content: "", display: "block", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%", position: "absolute", top: "30%", left: "30%", transform: "translate(-50%, -50%)"}

    const creepyEyeDefault = {width: '57px', height: '57px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
    const creepyEyeHover = {width: '62px', height: '62px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
    const creepyEyeFocus = {width: '62px', height: '32px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
    const creepyEyeShine = {content: "", display: "block", width: "25px", height: "25px", backgroundColor: "black", borderRadius: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}

    const eye = [
        { value: {hoverDefaultValue: cuteEyeDefault, hoverValue: cuteEyeHover, focusValue: cuteEyeFocus, eyeShineStyle: cuteEyeShine}, label: '🎀 Cute' },
        { value: {hoverDefaultValue: creepyEyeDefault, hoverValue: creepyEyeHover, focusValue: creepyEyeFocus, eyeShineStyle: creepyEyeShine}, label: '😨 Creepy' }
    ];

    /* Sets mouth state */

    const mouthShape = [
        { value: "50% 50% 0% 50%", label: '😃 Happy' },
        { value: "50% 50% 50% 50%", label: '😢 Sad' },
    ];

    const [mouthChoice, setMouthChoice] = useState('50% 50% 0% 50%')


    return (
        <div className='home-body'>
            <div className='pet-image-stats'>
                <PetImage colorChoice={colorChoice} earChoice={earChoice} eyeChoice={eyeChoice} mouthChoice={mouthChoice} />
                <Stats />
            </div>
            <div className='selections'>
                <header className='selection-header'>Customize Your Pet</header>
                <div className='selection-dropdowns'>
                    <div className='selection'>
                        <label>Ears:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: '🐶 Puppy' }} />
                    </div>
                    <div className='selection'>
                        <label>Eyes:</label>
                        <Select options={eye} onChange={(choice) => setEyeChoice(choice.value)} defaultValue={{ value: {hoverDefaultValue: cuteEyeDefault, hoverValue: cuteEyeHover, focusValue: cuteEyeFocus, eyeShineStyle: cuteEyeShine}, label: '🎀 Cute' }} />
                    </div>
                    <div className='selection'>
                        <label>Mouth:</label>
                        <Select options={mouthShape} onChange={(choice) => setMouthChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: '😃 Happy' }} />
                    </div>
                    <div className='selection'>
                        <label>Color:</label>
                        <Select options={color} onChange={(choice) => setColorChoice(choice.value)} defaultValue={{ value: '#EAE0DA', label: '🐀 Grey' }} />
                    </div>
                    <div className='selection'>
                        <label>Background:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'to be added' }} />
                    </div>
                    <div className='selection'>
                        <label>Hat:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'to be added' }} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PetCustomizations;