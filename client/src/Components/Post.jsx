import React from 'react'

export default function Post({posts}) {

  return (
    <div>
      <p>{posts.title}</p>
      <p>{posts.content}</p>
    </div>
  )
}
