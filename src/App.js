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
      setComments(data.data)
    }catch(e){
      console.log(e)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  const arr = comments
  .filter((item)=>{
    if (search==""){
      return item;
    }else if(item.name.toLowerCase().includes(search.toLowerCase())){
      return item;
    }
  })
  .map((data, index)=>{
    return(
      <tr>
      <td>{data.postId}</td>
      <td>{data.id}</td>
      <td>{data.name}</td>
      <td>{data.email}</td>
      <td>{data.body}</td>
    </tr>
    )
  })
  return (
    <div className="App">
      <h1>Comments</h1>
        <input type="text" placeholder="Search" onChange={(e)=>{
          setSearch(e.target.value);
        }}/>
          <table>
            <tr>
              <th>Post Id</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
            {arr}
          </table>
    </div>
  );
}

export default App;

