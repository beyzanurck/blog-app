import { useState, useEffect } from 'react'
import './App.css'
import Post from './Components/Post'
import Input from './Components/Input';

function App() {

  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState(''); 

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

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  };

  return (
    <div className='home-app'>
      <div className='posts'>
        {
          posts.map((item, index) => (
            <Post key={index} posts = {item}  />
          ))
        }
      </div>

      <div className='post-list'>

        <Input
          placeholder="Search..."
          type='text'
          value={search}
          onChange={handleSearchChange}
        />

        {
          posts.map((item, index) => (
            <p 
              key={index} 
              style={
                { display: item.title.toLowerCase().includes(search.toLowerCase()) ? 'block' : 'none' }
              }>
              {item.title}
            </p>
          ))
        }

      </div>
    </div>
  )
}

export default App
