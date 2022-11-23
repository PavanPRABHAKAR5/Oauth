import React from 'react'
import List from './List'
import LandingPageHeader from './LandingPageHeader'
const LandingPage = () => {
  return (
    <>
    <LandingPageHeader/>
    <div className="p-4 box intro">
        <h1>Welcome to CRUD app website</h1>
        <p>To Add, edit or delete books in the webpage place Sign In. </p>
    </div>
    <List />
    </>
  )
}

export default LandingPage