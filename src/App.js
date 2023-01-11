import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';
import Comments from './Component/comments';

function App() {
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState("")
  const getData = async() => {
    try{
      const data = await axios.get("https://jsonplaceholder.typicode.com/comments")
      setComments(data.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])


  return (
    <div className="App">
      <h1>Comments</h1>
      <Comments comments={comments} search={search} setSearch={setSearch}></Comments>
    </div>
  );
}

export default App;

