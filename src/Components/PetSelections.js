import Select from 'react-select';
import PetImage from './PetImage';
import Stats from './Stats';
import './PetImage.css'
import { useState } from 'react';

function PetSelections() {

    const color = [
        { value: '#EAE0DA', label: 'Grey' },
        { value: '#C1A58C', label: 'Brown' },
        { value: '#A0C3D2', label: 'Blue' }
    ];

    const [colorChoice, setColorChoice] = useState("#EAE0DA")

    const earShape = [
        { value: "50% 50% 0% 50%", label: '🐶 Puppy' },
        { value: "50% 50% 50% 50%", label: '🐭 PomPom' },
        { value: "0% 50% 50% 50%", label: '🐷 Piggy' }
    ];

    const [earChoice, setEarChoice] = useState('50% 50% 0% 50%')


    return (
        <>
        <div className='home-body'>
            <div className='pet-image-stats'>
                <PetImage colorChoice={colorChoice} earChoice={earChoice} />
                <Stats />
            </div>
            <div className='selections'>
                <header className='selection-header'>Customize Your Pet</header>
                <div className='selection-dropdowns'>
                    <div className='selection'>
                        <label>Ears:</label>
                        <Select styles={{width: '300px',}} options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: '🐶 Puppy' }} />
                    </div>
                    <div className='selection'>
                        <label>Eyes:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'Puppy' }} />
                    </div>
                    <div className='selection'>
                        <label>Mouth:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'Puppy' }} />
                    </div>
                    <div className='selection'>
                        <label>Color:</label>
                        <Select options={color} onChange={(choice) => setColorChoice(choice.value)} defaultValue={{ value: '#EAE0DA', label: 'Grey' }} />
                    </div>
                    <div className='selection'>
                        <label>Background:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'Puppy' }} />
                    </div>
                    <div className='selection'>
                        <label>Hat:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'Puppy' }} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default PetSelections;