import { useState } from 'react';
import './PetImage.css'

function PetImage(props) {

    /* Sets eye styles */

    let eyeDefault = {width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '100px'}
    let eyeHover = {width: '65px', height: '65px', backgroundColor: 'black', borderRadius: '100px'}
    let eyeFocus = {width: '65px', height: '35px', backgroundColor: 'black', borderRadius: '100px'}
    let eyeShine = {content: "", display: "block", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%", position: "absolute", top: "30%", left: "30%", transform: "translate(-50%, -50%)"}

    if (props.eyeChoice === "cute") {
        eyeDefault = {width: '60px', height: '60px', backgroundColor: 'black', borderRadius: '100px'}
        eyeHover = {width: '65px', height: '65px', backgroundColor: 'black', borderRadius: '100px'}
        eyeFocus = {width: '65px', height: '35px', backgroundColor: 'black', borderRadius: '100px'}
        eyeShine = {content: "", display: "block", width: "20px", height: "20px", backgroundColor: "white", borderRadius: "50%", position: "absolute", top: "30%", left: "30%", transform: "translate(-50%, -50%)"}
    } else if (props.eyeChoice === "creepy") {
        eyeDefault = {width: '57px', height: '57px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
        eyeHover = {width: '62px', height: '62px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
        eyeFocus = {width: '62px', height: '32px', backgroundColor: 'white', borderRadius: '100px', boxShadow: 'inset 0px 0px 10px black', border: '3px solid black'}
        eyeShine = {content: "", display: "block", width: "25px", height: "25px", backgroundColor: "black", borderRadius: "50%", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)"}
    };

    /* Sets mouth styles */

    let mouthDefault = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '0px 0px 40px 40px', width: '40px', height: '20px'}
    let mouthHover = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '100px 100px 100px 100px', width: '15px', height: '15px'}
    let mouthFocus = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '0px 0px 40px 40px', width: '40px', height: '40px'}
    let mouthtongue = {content: '', display: 'block', width: '15px', height: '10px', backgroundColor: 'darksalmon', borderRadius: '50% 50% 10px 10px', position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)'}

    if (props.mouthChoice === "happy") {
        mouthDefault = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '0px 0px 40px 40px', width: '40px', height: '20px'}
        mouthHover = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '100px 100px 100px 100px', width: '15px', height: '15px'}
        mouthFocus = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '0px 0px 40px 40px', width: '40px', height: '40px'}
        mouthtongue = {content: '', display: 'block', width: '15px', height: '10px', backgroundColor: 'darksalmon', borderRadius: '50% 50% 10px 10px', position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)'}
    } else if (props.mouthChoice === "sad") {
        mouthDefault = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '40px 40px 0px 0px', width: '40px', height: '20px'}
        mouthHover = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '100px 100px 100px 100px', width: '15px', height: '15px'}
        mouthFocus = {backgroundColor: 'pink', border: '2px solid #98928E', position: 'relative', borderRadius: '0px 0px 40px 40px', width: '40px', height: '40px'}
        mouthtongue = {content: '', display: 'block', width: '15px', height: '10px', backgroundColor: 'darksalmon', borderRadius: '50% 50% 10px 10px', position: 'absolute', bottom: '0px', left: '50%', transform: 'translateX(-50%)'}
    };

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

    const hoverEyeStyle = (isHovering ? eyeHover : eyeDefault)

    const hoverMouthStyle = (isHovering ? mouthHover : mouthDefault)

    /* Sets petting/clicking expressions */

    function useFocusing() {
        const [focusing, setFocusing] = useState(false);
        const onFocusProps = {
            onMouseDown: () => setFocusing(true),
            onMouseUp: () => setFocusing(false),
        }
        return [focusing, onFocusProps]
    }
    const [isFocusing, isFocusProps] = useFocusing()

    const eyeStyle = (isFocusing ? eyeFocus : hoverEyeStyle)

    const mouthStyle = (isFocusing ? mouthFocus : hoverMouthStyle)

    /* Sets click stats */

    const handleClick = () => {
        props.setClickCount(props.clickCount + 1);
      };

    return (
        <div className="petImage">
            <button className="body" onClick={handleClick} style={{backgroundColor: props.colorChoice}} {...isHoverProps} {...isFocusProps}>
                <div className='ears'>
                    <div className='ear' style={{backgroundColor: props.colorChoice, borderRadius: props.earChoice}}></div>
                    <div className='ear' style={{backgroundColor: props.colorChoice, borderRadius: props.earChoice, transform: 'rotate(90deg)'}}></div>
                </div>
                <div className="eyes">
                    <div className="eye" style={eyeStyle}><div className='eye-shine' style={eyeShine}></div></div>
                    <div className="eye" style={eyeStyle}><div className='eye-shine' style={eyeShine}></div></div>
                </div>
                <div className="mouth" style={mouthStyle}><div className='mouth-tongue' style={mouthtongue}></div></div>
            </button>
        </div>
    );
};

export default PetImage;