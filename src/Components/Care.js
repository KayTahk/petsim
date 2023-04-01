

function Care(props) {

    const handleSleepClick = () => {
        props.setEnergyState('Awake');
      };

      const handleFeedClick = () => {
        props.setHungerState('Full');
      };

      const message = () => {
        if (props.hungerState === "Full" && props.energyState === "Awake") {
            return "Your pet is not hungry or sleepy and doesn't want food or sleep!"
        } else if (props.hungerState === "Full") {
            return "Your pet is not hungry and doesn't want food!"
        } else if (props.energyState === "Awake") {
            return "Your pet is awake and doesn't want to sleep!"
        } 
      };

    return (
        <div className='selections'>
            <header className='selection-header'>Pet Care</header>
            <div className='selection-dropdowns'>
                <div>
                    <p>{message(props)}</p>
                    <button className='pet-button' disabled={props.energyState === 'Awake' ? true : false} onClick={handleSleepClick}>Sleep</button>
                    <button className='pet-button' disabled={props.hungerState === 'Full' ? true : false} onClick={handleFeedClick}>Feed</button>
                </div>
            </div>
        </div>
    );
};

export default Care;