import React from 'react'
import {Table, Button} from "react-bootstrap";
import {useEffect, useState} from "react"
import PostDataService from "../services/Post.services";
const PostList = ({getBookId}) => {
    const [books, setBooks ] = useState([])

    useEffect(()=>{
        getPosts();
    },[])

    const getPosts = async ()=>{
        const data = await PostDataService.getAllPosts();
        console.log(data.docs);
        setBooks(data.docs.map((doc)=>({...doc.data(), id:doc.id})))
    };
    
    const deleteHandler= async (id)=>{
        await PostDataService.deletePost(id);
        getPosts();
    }
  return (
  <>
  {/* <pre>{JSON.stringify(books, undefined, 2)}</pre> */}
  <div className="p-4 box">
    <div className='mb-2'>
        <Button varient="dark edit" onClick={getPosts}>Refresh</Button>
    </div>
    <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>No.</th>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {books.map((doc, index)=>{
                return (
                    <tr key={doc.id}>
                    <td>{index + 1}</td>
                    <td>{doc.title}</td>
                    <td>{doc.author}</td>
                    <td>{doc.status}</td>
                    <td>
                        <Button varient="secondary" className='mr-2 ' onClick={(e)=> getBookId(doc.id)}>Edit</Button>
                        <Button varient="danger" className='mr-2 ' onClick={(e)=> deleteHandler(doc.id)}>Delete</Button>
                    </td>
                </tr>
                )
            })}

        </tbody>
    </Table>
    </div>
  </>
  )
}

export default PostList