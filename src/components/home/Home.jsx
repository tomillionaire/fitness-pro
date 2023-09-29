import React from 'react'
import "./home.css"

const Home = () => {
  return (
    <div className='homepage' >
        
        <div className='homeheader'>

            <div className='hometext'>
                <div className='homehead' >
                    <h3>TRAIN SMARTER. GET STRONGER</h3>
                    <h1 >Simple fitness experience for everyone.</h1>
                </div>
                
                <p>Track your workouts, get better results, and be the best version of you.
                 Less thinking, more lifting.</p>
            </div>
            
            <div className='homebutton'>
                <button className='button1'>
                   <p>Download App</p> 
                 </button>
                <button className='button2'>
                   <p>Book a Class</p> 
                </button>
            </div>  

        </div>
        


        <div className='homeimage'>
            <img src="./assets/watch.png" alt="" className='watch'/>
        </div>

    </div>
  )
}

export default Home