import { useState, useEffect } from "react";

import InputBar from "./components/InputBar/InputBar";
import BlockHolder from "./components/BlockHolder/BlockHolder";
import axios from "axios";

function App() {
  const [blockList, setBlockList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/FetchAllBlocks')
    .then(response => setBlockList(response.data))
    .catch(error => {
      alert(error);
    });
  })


  function handleBlockAddition(name, color){
    if(name != ""){
      axios.post('http://localhost:8080/SubmitBlockAddition', {
        name: name,
        color: color
      })
      .then(response => setBlockList(response.data))
      .catch(error => {
        alert(error);
      });

    }
  }

  function handleBlockDeletion(id){
    if(id && 1 <= id && id <= blockList.length){
      axios.post('http://localhost:8080/SubmitBlockDeletion', {
        id: blockList[id-1].id
      })
      .then(response => setBlockList(response.data))
      .catch(error => {
        alert(error);
      });
    }
  }
  

  return (
    <>
      <BlockHolder blockList={blockList}/>
      <InputBar  handleAdd={handleBlockAddition} handleDel={handleBlockDeletion}/>
    </>
  );
}

export default App
