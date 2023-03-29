import './PetImage.css'

function Stats() {

    return (
        <div className="Stats">
            <header className="stats-header">Stats</header>
            <ul className='stats-list'>
                <li className='stat'>💖: 1</li>
                <li className='stat'>Age: 10mins</li>
                <li className='stat'>Games: 1</li>
                <li className='stat'>Energy: Awake</li>
                <li className='stat'>Hunger: Full</li>
            </ul>
        </div>
    );
};

export default Stats;