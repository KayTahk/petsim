import { useState } from 'react';
import './PetImage.css'

function PetImage(props) {

    /* Sets hover expressions */

    function useHovering() {
        const [hovering, setHovering] = useState(false);
        const onHoverProps = {
            onMouseEnter: () => setHovering(true),
            onMouseLeave: () => setHovering(false),
        }
        return [hovering, onHoverProps]
    }
    const [isHovering, isHoverProps] = useHovering()

    const hoverEyeStyle = (isHovering ? {width: '65px', height: '65px', backgroundColor: 'black', borderRadius: '100px 100px 100px 100px'} : {width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '100px 100px 100px 100px'})

    const hoverMouthStyle = (isHovering ? {borderRadius: '100px 100px 100px 100px', width: '15px', height: '15px'} : {borderRadius: '0px 0px 40px 40px', width: '40px', height: '20px'})

    /* Sets petting expressions */

    function useFocusing() {
        const [focusing, setFocusing] = useState(false);
        const onFocusProps = {
            onMouseDown: () => setFocusing(true),
            onMouseUp: () => setFocusing(false),
        }
        return [focusing, onFocusProps]
    }
    const [isFocusing, isFocusProps] = useFocusing()

    const eyeStyle = (isFocusing ? {width: '65px', height: '35px', backgroundColor: 'black', borderRadius: '100px 100px 100px 100px'} : hoverEyeStyle)

    const mouthStyle = (isFocusing ? {borderRadius: '0px 0px 40px 40px', width: '40px', height: '40px'} : hoverMouthStyle)

    return (
        <div className="petImage">
            <button className="body" style={{backgroundColor: props.colorChoice}} {...isHoverProps} {...isFocusProps}>
                <div className='ears'>
                    <div className='ear' style={{backgroundColor: props.colorChoice, borderRadius: props.earChoice}}></div>
                    <div className='ear' style={{backgroundColor: props.colorChoice, borderRadius: props.earChoice, transform: 'rotate(90deg)'}}></div>
                </div>
                <div className="eyes">
                    <div className="eye" style={eyeStyle}></div>
                    <div className="eye" style={eyeStyle}></div>
                </div>
                <div className="mouth" style={mouthStyle}></div>
            </button>
        </div>
    );
};

export default PetImage;