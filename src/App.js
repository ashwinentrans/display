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
        <div style="overflow-x:auto;">
          <table>
            <tr>
              <th>Post Id</th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Body</th>
            </tr>
            {/* {comments
            .filter((item)=>{
              if (search==""){
                return item;
              }else if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item;
              }
            })
            .map((item)=>{
              return(
                <tr key={item.id}>
                  <td>{item.postId}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.body}</td>
                </tr>
              );
            })} */}
            </table>
        </div>
    </div>
  );
}

export default App;
