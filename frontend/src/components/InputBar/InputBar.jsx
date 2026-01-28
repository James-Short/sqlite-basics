import { useState } from 'react';

import './InputBar.css';

function InputBar(){
    const [blockName, setBlockName] = useState("");
    const [blockID, setBlockID] = useState();

    function updateName(update){
        setBlockName(update);
    }

    function submitName(){
        let selectedColor = document.querySelector(".color-select");
        alert(selectedColor.value);
    }

    function updateID(update){
        setBlockID(update);
    }

    function submitID(){
        alert(blockID)
    }

    return(
        <div className='input-bar'>
            <div className='add-bar'>
                <input type="text" placeholder='Name' className='name-input' onChange={(e) => updateName(e.target.value)} value={blockName}/>
                <select className='color-select'>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                </select>
                <button className='add-button' onClick={submitName}>Add Block</button>
            </div>
            <div className='delete-bar'>
                <input type="text" placeholder='#' className='id-input' onChange={(e) => updateID(e.target.value)} value={blockID}/>
                <button className='delete-button' onClick={submitID}>Delete Block</button>
            </div>
            
        </div>
    )
}

export default InputBar;