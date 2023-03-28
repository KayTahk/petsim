import Select from 'react-select';
import PetImage from './PetImage';
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
        { value: "50% 50% 0% 50%", label: 'Puppy' },
        { value: "50% 50% 50% 50%", label: 'PomPom' },
        { value: "0% 50% 50% 50%", label: 'Kitty' }
    ];

    const [earChoice, setEarChoice] = useState('50% 50% 0% 50%')


    return (
        <>
        <div className='home-body'>
            <PetImage colorChoice={colorChoice} earChoice={earChoice} />
            <div className='selections'>
                <div className='selection'>
                    <label>Color</label>
                    <Select options={color} onChange={(choice) => setColorChoice(choice.value)} defaultValue={{ value: '#EAE0DA', label: 'Grey' }} />
                </div>
                <div className='selection'>
                    <label>Ear Shape</label>
                    <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={{ value: '50% 50% 0% 50%', label: 'Puppy' }} />
                </div>
            </div>
        </div>
        </>
    );
};

export default PetSelections;