import { execute, fetchAll } from './db.js'

export async function createBlock(name, color){
    await execute(
        "INSERT INTO blocks (name, color) VALUES (?, ?)",
        [name, color]
    );
}

export async function deleteBlock(id){
    await execute(
        "DELETE FROM blocks WHERE id = ?",
        [id]
    );
}

export async function fetchAllBlocks(){
    return(await fetchAll("SELECT * FROM blocks", []))
}