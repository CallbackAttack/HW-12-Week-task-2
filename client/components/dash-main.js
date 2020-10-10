import React from 'react'
import { Link } from "react-router-dom"



const DashMain = () => {
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Main
          <Link to="/dashboard/profile/3c3add9b-1f1f-4760-a66d-df0e9fb8fcdb"> Go To Profile </Link>
          <Link to="/dashboard/"> Go To Root </Link>
        </div>
      </div>
    </div>
  )
}


DashMain.propTypes = {}


export default React.memo(DashMain)