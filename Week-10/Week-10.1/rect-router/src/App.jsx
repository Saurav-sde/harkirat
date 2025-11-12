import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link, useNavigate, Outlet} from "react-router"

function App() {

  return (
    <div>
      {/* This is dumb way to do navigation , this will take away the benefit of SPA, as this fetches again everything */}
      {/* <a href="/">Allen</a> |
      <a href="/neet/online-coaching-class-11">Class 11</a> |
      <a href="/neet/online-coaching-class-12">Class 12</a> | */}

      
      <BrowserRouter>
        {/* Use Link component from react-router to do navigation*/}
        {/* <Link to="/">Allen</Link> |
        <Link to="/neet/online-coaching-class-11">Class 11</Link> |
        <Link to="/neet/online-coaching-class-12">Class 12</Link> | */}
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/neet/online-coaching-class-11' element={<Class11Program/>}></Route>
            <Route path='/neet/online-coaching-class-12' element={<Class12Program/>}></Route>
            <Route path='/' element={<Landing/>}></Route>
            <Route path='*' element={<ErrorPage/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}


function Layout() {
  return (
    <div style={{height: "100vh"}}>
      <Header/>
      <div style={{height: "90vh"}}>
        <Outlet/>
      </div>
      Footer | Contact us
    </div>
  )
}

function Header() {
  return (
    <div>
      <Link to="/">Allen</Link> |
      <Link to="/neet/online-coaching-class-11">Class 11</Link> |
      <Link to="/neet/online-coaching-class-12">Class 12</Link> 
    </div>
  )
}

function ErrorPage() {
  return (
    <div>
      Sorry page is not found
    </div>
  )
}

function Landing() {
  return (
    <div>
      Welocome to Allen
    </div>
  )
}

function Class11Program() {
  return (
    <div>
      NEET programs for Class 11th 
    </div>
  )
}

function Class12Program() {
  const navigate = useNavigate();

  function redirectUser() {
    navigate("/");
  }

  return (
    <div>
      NEET programs for Class 12th 

      {/* we can do this with Link also but we have another option useNavigate */}
      <button onClick={redirectUser}>Go back to landing page</button> 
    </div>
  )
}

export default App
