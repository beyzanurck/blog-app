import React from 'react'
import Title from './Title'
import Content from './Content'

export default function Post({posts}) {

  return (
    <div>
      <Title title = {posts.title}/>
      <Content content = {posts.content}/>
    </div>
  )
}
