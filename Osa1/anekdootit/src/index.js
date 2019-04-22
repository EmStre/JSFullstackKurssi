import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
        {text}
    </button>
)

const App = ({anecdotes, points}) => {
  const [selected, setSelected] = useState(0)
  const [point, setPoints] = useState(0)
  
  const hanleNewQuoteClick = () => {
    const min=0; 
    const max=anecdotes.length-1;  
    const random =Math.floor(Math.random() * (+max - +min)) + +min; 
    setSelected(random)
  }

  const handleVoteClick = () => {
    const copy = { ...points }
    copy[selected] += 1 
    console.log(point)
    points[selected] = copy[selected]
    setPoints(points[selected])
  }

  return (
    <div>
        <h2>Anecdote of the day:</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {points[selected]} votes</p> 
      <Button handleClick={hanleNewQuoteClick} text='Show next anecdote'/>
      <Button handleClick={handleVoteClick} text='Vote'/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[points.indexOf(Math.max(...points))]}</p>
      <p>has {Math.max(...points)} votes</p> 
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const points = Array.apply(null, new Array(anecdotes.length)).map(Number.prototype.valueOf,0);

ReactDOM.render(
  <App anecdotes={anecdotes} points={points}/>,
  document.getElementById('root')
)
