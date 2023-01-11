import React from "react";

const Comments = ({ comments, search, setSearch }) => {
    return(
        <div>
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
            {comments
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
            })}
            </table>
        </div>

    )
}


export default Comments;

