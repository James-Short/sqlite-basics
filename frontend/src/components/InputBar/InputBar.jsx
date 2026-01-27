import './InputBar.css';

function InputBar(){
    return(
        <div className='input-bar'>
            <div className='add-bar'>
                <input type="text" placeholder='Name' className='name-input'/>
                <select className='color-select'>
                    <option value="Red">Red</option>
                    <option value="Blue">Blue</option>
                    <option value="Orange">Orange</option>
                    <option value="Yellow">Yellow</option>
                </select>
                <button className='add-button'>Add Block</button>
            </div>
            <div className='delete-bar'>
                <input type="text" placeholder='ID' className='id-input'/>
                <button className='delete-button'>Delete Block</button>
            </div>
            
        </div>
    )
}

export default InputBar;