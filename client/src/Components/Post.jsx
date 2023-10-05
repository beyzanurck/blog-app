import React from 'react'
import Title from './Title'
import Content from './Content'
import Img from './Img'

export default function Post({posts}) {

  return (
    <div className='post-items'>
      <Img source = {posts.img_url}/>
      <Title title = {posts.title}/>
      <Content content = {posts.content}/>
    </div>
  )
}
