import React,{useState,useEffect} from 'react'
import "./Quiz.css"

function Quiz() {
  const [state, setState] = useState([])
  const [hold,setHold] = useState(false)

  const handleClick = (id) => {
      console.log(id)
      setHold(prevHold => {
        return !prevHold  
      })
    
  } 

  

  useEffect(()=>{
    fetch("https://the-trivia-api.com/api/questions?limit=5")
        .then(res => res.json())
        .then(data => setState(data))
  },[])
  return (
    <div className='hero-section'>
      {
        state.map((obj,index) => {
          return (
            <div className="hero-content">
              <h1 className="question">{obj.question}</h1>
              <div className="button-class">
                <button style={{backgroundColor:`${hold ? '#D6DBF5' : ""}`}} onClick={()=>handleClick(obj.id)} className='hero-button'>{obj.incorrectAnswers[0]}</button>
                <button style={{backgroundColor:`${hold ? '#D6DBF5' : ""}`}} onClick={()=>handleClick(obj.id)} className='hero-button'>{obj.correctAnswer}</button>
                <button style={{backgroundColor:`${hold ? '#D6DBF5' : ""}`}} onClick={()=>handleClick(obj.id)} className='hero-button'>{obj.incorrectAnswers[1]}</button>
                <button style={{backgroundColor:`${hold ? '#D6DBF5' : ""}`}} onClick={()=>handleClick(obj.id)} className='hero-button'>{obj.incorrectAnswers[2]}</button> 
              </div>
              <div className="line"><hr/></div>
            </div>
          )
        }) 
      }
      <div className='submit-button'>
        <button className="submit">Check Answer</button>
      </div>
    </div>
  )
}

export default Quiz


              