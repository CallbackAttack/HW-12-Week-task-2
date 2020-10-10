import React from 'react'
import { Link, useParams } from "react-router-dom"





const DashProfile = () => {
  const { profileName }  = useParams()
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
        <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          Profile
          <Link to="/dashboard/"> Go To Root </Link>
          <Link to="/dashboard/main"> Go To Main </Link>
          <div id="username">{profileName}</div>
        </div>
      </div>
    </div>
  )
}


DashProfile.propTypes = {}


export default React.memo(DashProfile)