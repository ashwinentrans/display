import { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import React from "react";
import Comments from "./Component/comments";
import Pagination from "./Component/pagination";

function App() {
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [commentsPerPage, setCommentsPerPage] = useState(10);
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://jsonplaceholder.typicode.com/comments"
      );
      setComments(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const lastCommentIndex = currentPage * commentsPerPage;
  const firtCommentIndex = lastCommentIndex - commentsPerPage;
  const currentComments = comments.slice(firtCommentIndex, lastCommentIndex);

  return (
    <div className="App">
      <h1>Comments</h1>
      <Comments
        comments={currentComments}
        search={search}
        setSearch={setSearch}
      ></Comments>
      <Pagination
        totalComments={comments.length}
        commentsPerPage={commentsPerPage}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      ></Pagination>
    </div>
  );
}

export default App;
