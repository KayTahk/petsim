import PetSelections from "./PetSelections";

function MenuNav() {

    return (
        <>
            <div className="container">
                <ul className='nav-list'>
                    <li className='nav-item'>Customize Pet</li>
                    <li className='nav-item'>Pet Care</li>
                    <li className='nav-item'>Pet Games</li>
                </ul>
                <PetSelections />
            </div>
        </>
    );
};

export default MenuNav;