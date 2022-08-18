import React from 'react'
import { Link } from 'react-router-dom'

export default function FourOFour() {
  return (
    <div>
     <h1>Sorry: Page Not Found</h1>
      <h2>Please <Link to="/"><strong>Click Here</strong></Link> to go back to Home Page</h2>
    </div>
  )
}