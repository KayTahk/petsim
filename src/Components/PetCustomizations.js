import Select from 'react-select';
import './PetImage.css'

function PetCustomizations(props) {

    /* Sets eye options */

    const setColorChoice = props.setColorChoice;
    const color = [
        { value: '#EAE0DA', label: '🐀 Grey' },
        { value: '#C1A58C', label: '🐻 Brown' },
        { value: '#A0C3D2', label: '🐟 Blue' }
    ];

    /* Sets ear options */

    const setEarChoice = props.setEarChoice;
    const earShape = [
        { value: "50% 50% 0% 50%", label: '🐶 Puppy' },
        { value: "50% 50% 50% 50%", label: '🐭 PomPom' },
        { value: "0% 50% 50% 50%", label: '🐽 Piggy' }
    ];

    /* Sets eye options */

    const setEyeChoice = props.setEyeChoice;

    const eye = [
        { value: 'cute', label: '🎀 Cute' },
        { value: 'creepy', label: '😨 Creepy' }
    ];

    /* Sets mouth options */

    const setMouthChoice = props.setMouthChoice;

    const mouthShape = [
        { value: 'happy', label: '😃 Happy' },
        { value: 'sad', label: '😢 Sad' },
    ];


    return (
            <div className='selections'>
                <header className='selection-header'>Customize Your Pet</header>
                <div className='selection-dropdowns'>
                    <div className='selection'>
                        <label>Ears:</label>
                        <Select options={earShape} onChange={(choice) => setEarChoice(choice.value)} defaultValue={earShape.find(choice => choice.value === props.earChoice)} />
                    </div>
                    <div className='selection'>
                        <label>Eyes:</label>
                        <Select options={eye} onChange={(choice) => setEyeChoice(choice.value)} defaultValue={eye.find(choice => choice.value === props.eyeChoice)} />
                    </div>
                    <div className='selection'>
                        <label>Mouth:</label>
                        <Select options={mouthShape} onChange={(choice) => setMouthChoice(choice.value)} defaultValue={mouthShape.find(choice => choice.value === props.mouthChoice)} />
                    </div>
                    <div className='selection'>
                        <label>Color:</label>
                        <Select options={color} onChange={(choice) => setColorChoice(choice.value)} defaultValue={color.find(choice => choice.value === props.colorChoice)} />
                    </div>
                </div>
            </div>
    );
};

export default PetCustomizations;