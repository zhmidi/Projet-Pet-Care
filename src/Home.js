import React from 'react'
import { Link } from 'react-router-dom'

const  Home = () => {
  return (
    <div >
        <div className="middle-area">
            
                <div className="logo">
                    <img src="" alt="" />
                </div>

            
            <div className="main">
                <div className="main-text">
                    <h1>Be a Friend</h1>
                    <h2>Not an owner</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi, nulla! Possimus soluta ipsum eaque,
                    iusto quos ratione dolorum maxime nihil id, assumenda odit rem dignissimos expedita beatae repellendus quam dolor.</p>
                    <Link to="/ADOPT">ADOPT NOW</Link>
                </div>
           
            </div>
            <div className="bottom-part">
                <div className="social-icon">
                    <a><img src="https://cdn-icons-png.flaticon.com/128/2111/2111463.png" alt="" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/128/2504/2504903.png" alt="" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/128/3670/3670151.png" alt="" /></a>
                    <a><img src="https://cdn-icons-png.flaticon.com/128/3670/3670051.png" alt="" /></a>
                </div>
                <p>www.petcare.ma</p>
            </div>
        </div>
        

    </div>
  )
}

export default Home 