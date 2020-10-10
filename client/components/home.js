import React from 'react'
import { Link } from "react-router-dom"
import Header from './header'


const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <title>Dashboard</title>
          <Link to="/dashboard/profile/3c3add9b-1f1f-4760-a66d-df0e9fb8fcdb"> Go To Profile </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
        </div>
      </div>
    </div>
  )
}


Home.propTypes = {}


export default React.memo(Home)