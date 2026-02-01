import './Block.css'

function Block({ name, id, color }){
    return(
        <div className='block' style={{backgroundColor: color}}>
            <h1 className='block-name'>{name}</h1>
            <h3 className='block-id'>{"#" + id}</h3>
        </div>
    )
}

export default Block;