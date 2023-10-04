import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import Img from './Img';
import Title from './Title';
import Content from './Content';

export default function ShowAPost() {

    const [post, setPost] = useState([]);
    let { id } = useParams();

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

  return (
    <div>
      <Img source = {post.img_url}/>
      <Title title = {post.title}/>
      <Content content = {post.content}/>
      <div className='admin-button'>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  )
}
