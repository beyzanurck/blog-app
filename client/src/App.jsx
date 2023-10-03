import { useState, useEffect } from 'react'
import './App.css'
import Post from './Components/Post'

function App() {

  const [posts, setPosts] = useState([]);

  async function getPosts() {
    try {
      const response = await fetch('http://localhost:1212');

      if(!response.ok) {
        throw new Error('response was not ok');
      }

      const allPosts = await response.json();
      setPosts(allPosts)
      console.log(posts[0])

    } catch (error) {
      console.log(error.message);
    }
  }


  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className='posts'>
        {
          posts.map((item, index) => (
            <Post key={index} posts = {item}  />
          ))
        }
    </div>
  )
}

export default App
