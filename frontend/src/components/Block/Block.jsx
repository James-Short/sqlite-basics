import './Block.css'

function Block(props){
    return(
        <div className='block'>
            <h1 className='block-name'>{props.name}</h1>
            <h3 className='block-id'>{"#" + props.id}</h3>
        </div>
    )
}

export default Block;