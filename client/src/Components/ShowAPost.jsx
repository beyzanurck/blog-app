import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import Img from './Img';
import Title from './Title';
import Content from './Content';
import EditPostPopup from './EditPostPopup';

export default function ShowAPost() {

    const [post, setPost] = useState([]);

    let { id } = useParams();
    const navigate = useNavigate(); 

    const [show, setShow] = useState(false)


    async function getPostById() {
        try {

            const response = await fetch(`http://localhost:1212/${id}`);

            const thePost = await response.json()

            setPost(thePost)

        } catch (error) {
            console.log(error.message);
        }
    }

    useEffect(() => {
        getPostById();
    }, []);

    async function handleDelete(id) {

        try {
            const deletePost = await fetch(`http://localhost:1212/${id}`, {method: "DELETE"})
        } catch (error) {
            console.error(error.message)
        }
    }

    async function submitUpdate(editedPost) {
        setPost(editedPost)
    }

  return (
    <div>
      <Img source = {post.img_url}/>
      <Title title = {post.title}/>
      <Content content = {post.content}/>
      <div className='admin-button'>
        <button onClick={() => {setShow(true)}} >Edit</button>
        <button onClick={() => {handleDelete(id); navigate('/'); }}>Delete</button>
      </div>

      <EditPostPopup 
        show ={show} 
        onClose={() => {setShow(false)}}
        post = {post}
        onUpdate = {submitUpdate}
      />
    </div>
  )
}


