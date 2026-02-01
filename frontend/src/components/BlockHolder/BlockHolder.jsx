import './BlockHolder.css';

import Block from '../Block/Block';

function BlockHolder({ blockList }){
    return(
        <div className='block-holder'>
            {blockList.map((block, index) => (
                <Block key={index} name={block.name} id={index+1} color={block.color}/>
            ))}
        </div>
    )
}

export default BlockHolder;