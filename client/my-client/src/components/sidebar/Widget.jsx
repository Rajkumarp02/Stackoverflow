import React,{useEffect} from 'react'
import pen from '../../assests/pen-solid.svg'
import msg from  '../../assests/message-solid.svg'
import stack from '../../assests/logo.png'

export default function Widget() {
  

  


  return (
    <div className='right-1'>
       
      <div className='right'>
   
      <h4>The Overflow Blog</h4>

      <div className='right-div' >
        <img src={pen} alt='' className='pen'/>
        <p>Improving time to first byte: Q&A with Dana <br/>Lawson of Netlify, </p>
       </div>
       <div className='right-div' >
       <img src={pen} alt='' className='pen'/>
       <p>What it’s like to be on the Python Steering Council (Ep. 592),</p>
       </div>
       
       <div className='right-div' >
       <img src={pen} alt='' className='pen'/>
       <p>Review queue workflows - Final release <br/>... ....</p>
       </div>
      </div>
     
    

      <div className='right'>
      <h4>Featured on Meta</h4>

      <div className='right-div' >
        <img src={msg} alt='' className='msg'/>
        <p>Colors update: A more detailed look with stackoverflow .....!</p>
         </div>
       <div className='right-div' >
       <img src={msg} alt='' className='msg'/>
       <p>Stack Overflow at WeAreDevelopers World Congress in Berlin</p>
       </div>
      <div className='right-div' >
       <img src={stack} alt='' className='stack'/>
       <p >Temporary policy: Generative AI Tool (e.g., ChatGPT) is banned...!</p>
      </div>
      </div>

      <div className="right">
      <h4>Hot Meta Posts</h4>
        <div className="right-div">
        <img src={stack} alt='' className='stack'/>
       <p>Why was this spam flag declined, yet the question marked as spam?</p>
        </div>
        <div className="right-div">
        <img src={stack} alt='' className='stack'/>
        <p>What is the best course of action when a user has high enough rep to...</p>
        </div>
        <div className="right-div">
        <img src={stack} alt='' className='stack'/>
        <p>Is a link to the helpful to all that find that solution page a useful comment?</p>
        </div>
   

      </div>

   


    </div>
  )
}
