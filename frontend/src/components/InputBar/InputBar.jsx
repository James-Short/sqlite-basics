import { useState } from 'react';

import './InputBar.css';

function InputBar({ handleAdd, handleDel}){
    const [blockName, setBlockName] = useState("");
    const [blockID, setBlockID] = useState("");
    const [blockColor, setBlockColor] = useState("Tomato");



    return(
        <div className='input-bar'>
            <div className='add-bar'>
                <input type="text" placeholder='Name' className='name-input' onChange={(e) => setBlockName(e.target.value)} value={blockName}/>
                <select className='color-select' value={blockColor} onChange={(e) => setBlockColor(e.target.value)}>
                    <option value="tomato">Red</option>
                    <option value="deepskyblue">Blue</option>
                    <option value="lightsalmon">Orange</option>
                    <option value="lemonchiffon">Yellow</option>
                </select>
                <button className='add-button' onClick={() => {handleAdd(blockName, blockColor); setBlockName("")}}>Add Block</button>
            </div>
            <div className='delete-bar'>
                <input type="text" placeholder='#' className='id-input' onChange={(e) => setBlockID(e.target.value)} value={blockID}/>
                <button className='delete-button' onClick={() => {handleDel(blockID); setBlockID("")}}>Delete Block</button>
            </div>
            
        </div>
    )
}

export default InputBar;