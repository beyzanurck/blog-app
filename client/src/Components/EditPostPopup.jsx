import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import Input from './Input';
import Textarea from './Textarea';

export default function EditPostPopup({show , onClose, post, onUpdate}) {
    
  const [editedPost, setEditedPost] = useState(post)
  
  function handleChange (event) {
    const { value, name } = event.target;
    setEditedPost((prevValue) => ({ ...prevValue, [name]: value }));
  }

  const editThePost= async (post) => {
    try {
      
      const response = await fetch(`http://localhost:1212/${post.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
      })

      if (response.ok) {
        onUpdate(post);
      } else {
        console.error('Failed to update the contact');
      }

    } catch (error) {
      console.error(error.message)
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    editThePost(editedPost);
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    // getMonth() returns month from 0-11, so add 1 to get the correct month
    const month = String(date.getUTCMonth() + 1).padStart(2, '0');
    const day = String(date.getUTCDate()).padStart(2, '0');
  
    return `${year}-${month}-${day}`;
  }
  
  function enter(){
    console.log( "Modal is Shown" ) 
    post.updated_at = formatDate(post.created_at)
    setEditedPost(post)
  }


  return (
    <div>

      <Modal show={show} onHide={onClose} onEntered={enter} size="lg">

        <Modal.Header closeButton>
        <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>

        <Modal.Body>

        <form className='edit-post' onSubmit={handleSubmit}>

            <Input 
            placeholder='Title'
            type='text'
            name='title'
            value={editedPost.title}
            onChange={handleChange}
            />

            <Input 
            placeholder='Content'
            type='text'
            name='content'
            value={editedPost.content}
            onChange={handleChange}
            />

            <Input 
            placeholder='Date'
            type='date'
            name='updated_at'
            value={editedPost.updated_at}
            onChange={handleChange}
            />

            <Textarea 
            placeholder="Image URL"
            name="img_url" 
            value={editedPost.img_url}
            onChange={handleChange}
            />

        </form>
                
        </Modal.Body>

        <Modal.Footer>

          <Button variant="primary" type="submit" onClick={handleSubmit}>
                  Save
          </Button>

          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>

        </Modal.Footer>

      </Modal>
      
    </div>
  )
}

