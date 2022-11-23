import React from 'react'
import { Button } from "react-bootstrap"
import { useUserAuth } from '../context/UserAuthContext'

const Homepageheader = () => {
    const {user, logOut} = useUserAuth();
    // console.log(user)
    const handleLogout = async ()=>{
        try{
            await logOut() 
        }catch(err){
            console.log(err.message)
        }
    }

  return (
    <>
     <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <a className="navbar-brand" >
            CRUD APP
          </a>
          <ul id="navigation" className="navbar-nav">

            <li className="nav-item pt-2 pb-2 user">
            <a
                id="active" className="nav-link "
                aria-current="page"
                aria-selected="true"
              >
                 {user && user.email.split("@")[0]}
              </a>
           
            </li>
            <li  className="nav-item active signout">
              <a
                id="active" className="nav-link "
                aria-current="page"
                aria-selected="true"
                href="#"
                onClick={handleLogout}
              >
                Sign Out
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Homepageheader