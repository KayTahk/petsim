

function Games(props) {

    /* adds +1 to games count onClick */

    const handleClick = () => {
        props.setGamesCount(props.gamesCount + 1);
      };

      const message = () => {
        if (props.hungerState === "Hungry" && props.energyState === "Sleepy") {
            return "Your pet is hungry and sleepy and doesn't want to play!"
        } else if (props.hungerState === "Hungry") {
            return "Your pet is hungry and doesn't want to play!"
        } else if (props.energyState === "Sleepy") {
            return "Your pet is sleepy and doesn't want to play!"
        }
      };

    return (
        <div className='selections'>
            <header className='selection-header'>Pet Games</header>
            <div className='selection-dropdowns'>
                <div>
                    <p>{message(props)}</p>
                    <button className='pet-button' disabled={props.disableGame === 'disabled' ? true : false} onClick={handleClick}>Play Game</button>
                </div>
            </div>
        </div>
    );
};

export default Games;