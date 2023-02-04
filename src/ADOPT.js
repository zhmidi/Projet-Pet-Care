import React from 'react'
import { Link } from 'react-router-dom'

function ADOPT() {
  let now = [
    {
      icone : "https://cdn-icons-png.flaticon.com/128/3047/3047827.png",
      title : "ADOPTION CENTER",
      description: "LOREM IPSUM",

    },
    {
      icone : "https://cdn-icons-png.flaticon.com/128/7574/7574880.png",
      title : "PET WALKING",
      description : "LOREM IPSUM",
    },
    {
      icone : "https://cdn-icons-png.flaticon.com/128/489/489868.png",
      title: "PET FINDER",
      description : "LOREM IPSUM"
    },
    
      {
        icone : "https://cdn-icons-png.flaticon.com/128/1131/1131832.png",
        title: "PET GROOMING",
        description : "LOREM IPSUM"
      }
    
  ]
 

  return (
    <div className='adoptnow'>
      <h2>Looking For a Pet Services ?</h2>
      <div className='container'>
      <div className='principal'>
      {
        now.map(item =>(
          <div className='card'>
            <img className='a' src={item.icone} alt="" />
            <h3 className='b'>{item.title}</h3>
            <p className='c'>{item.description}</p>
            <Link to="/ReadMore" state={item}><button className='d'>READ MORE</button></Link>

          </div>
        ))
      }
      </div>
      </div>

    </div>
  )
}

export default ADOPT