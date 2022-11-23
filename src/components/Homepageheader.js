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
          <a className="navbar-brand" href="#">
            CRUD
          </a>
          <ul id="navigation" className="navbar-nav">

            <li  className="nav-item active">
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