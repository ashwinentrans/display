
import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import React from 'react';

function App() {
  const [comments, setComments] = useState([])
  const [search, setSearch] = useState("")
  const getData = async() => {
    try{
      const data = await axios.get("https://jsonplaceholder.typicode.com/comments")

      console.log("data",data.data)
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
        <input type="text" placeholder="Search" onChange={(e)=>{
          setSearch(e.target.value);
        }}/>
            {comments
            .filter((item)=>{
              if (search==""){
                return item;
              }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item;
              }
            })
            .map((item)=>{
              return(
 
                <p>{item.postId} - {item.id} - {item.name} - {item.email} - {item.body}</p>
              );
            })} 
    </div>
  );
}

export default App;

