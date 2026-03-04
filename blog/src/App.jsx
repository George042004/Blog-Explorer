import React from 'react'
import Home from './pages/Home'
import Loader from './components/Loader'
import { Route, Routes } from 'react-router-dom'
import PostDetails from './pages/PostDetails'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/post/:id' element={<PostDetails />}/>
      </Routes>
    </>
  )
}

export default App
