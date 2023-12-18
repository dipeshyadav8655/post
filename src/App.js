import React from 'react'
import Header from './Component/Header'
import ProfileBar from './Component/ProfileBar'
import Content from './Component/Content'
import PostFooter from './Component/PostFooter'
import Footer from './Component/Footer'
import Post from './Component/Post'

function App() {
  return (
    <div className='relative'>
      <Header />
      <Post />
      <Footer />
    </div>
  )
}

export default App