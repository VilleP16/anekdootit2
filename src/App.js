import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]
  
  const nextAnedcoteText = "Next anecdote"
  const voteAnecdoteText = "Vote"
  
   
  const [selected, setSelected] = useState(0)
  const[allVotes, setVotes] = useState(new Uint8Array(anecdotes.length))
  const[mostPopular, setMostPopular] = useState(-1)

  const showNewAnecdote = () => {
    let random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
    //console.log(random)
  }
  const voteAnecdote = () =>{
    const copy = [...allVotes]
    copy[selected] +=1
    setVotes(copy)

    const max = Math.max(...copy)
    console.log(max)
    const index = copy.indexOf(max)
    console.log('indekxi',index)
    setMostPopular(index)
    
  }

  
  return (
    <div>
      {anecdotes[selected]}
      <Button  text = {nextAnedcoteText} handleClick = {showNewAnecdote}/>
      <p>Shown anecdote has {allVotes[selected]} votes</p>
      <Button text = {voteAnecdoteText} handleClick = {voteAnecdote}/>
      <h2>Anecdote with most votes</h2>
      <p>{anecdotes[mostPopular]}</p>
    </div>
  )
}

const Button = (props) => {
  return(
    <div>
      <button onClick={props.handleClick}>{props.text}</button>
    </div>
  )
}

export default App