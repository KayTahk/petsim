import PetImage from './PetImage';
import Stats from './Stats';

function Care(props) {

    const colorChoice = props.colorChoice;
    const earChoice = props.earChoice;
    const eyeChoice = props.eyeChoice;
    const mouthChoice = ('50% 50% 0% 50%')

    return (
        <div className='home-body'>
            <div className='pet-image-stats'>
                <PetImage colorChoice={colorChoice} earChoice={earChoice} eyeChoice={eyeChoice} mouthChoice={mouthChoice} />
                <Stats />
            </div>
            <div className='selections'>
                <header className='selection-header'>Pet Care</header>
                <div className='selection-dropdowns'>
                    <div className='selection'>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Care;