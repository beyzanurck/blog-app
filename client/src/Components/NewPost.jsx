import React from 'react'
import Input from './Input'
import Textarea from './Textarea';
import { useState } from 'react';

export default function NewPost() {

  const [message, setMessage] = useState(false);

  const [newPost, setNewPost] = useState({
    "title" : "",
    "content" : "",
    "created_at" : new Date().toISOString().split('T')[0],
    "img_url" : ""
  })

  function handleChange(event){
    const {value, name} = event.target

    let formattedValue = value;

    if (name === 'created_at') {
      formattedValue = new Date(value).toISOString().split('T')[0];
    }

    setNewPost((preValue) => ({...preValue, [name]: formattedValue}));
  }

  const addNewPost= async (newPost) => {

    try {
      
        const response = await fetch("http://localhost:1212", {
            method : "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newPost)
        })

        if(response.ok) {setMessage(true)};

      } catch (error) {
          console.error(error.message)
      }
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewPost(newPost);
  }

  return (
    <form className='new-post' onSubmit={handleSubmit}>

      <Input 
        placeholder='Title'
        type='text'
        name='title'
        value={newPost.title}
        onChange={handleChange}
      />

      <Input 
        placeholder='Content'
        type='text'
        name='content'
        value={newPost.content}
        onChange={handleChange}
      />

      <Input 
        placeholder='Date'
        type='date'
        name='created_at'
        value={newPost.created_at}
        onChange={handleChange}
      />

      <Textarea 
        placeholder="Image URL"
        name="img_url" 
        value={newPost.img_url}
        onChange={handleChange}
      />

      <button type='submit'>Add</button>
      
      <p style={message ? { display: 'block' } : { display: 'none' }}>New post has been added successfully!</p>

    </form>
  )
}
