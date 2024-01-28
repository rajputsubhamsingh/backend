import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
    .then((response) => {
      setJokes(response.data)
    })
    .catch((err) => {
      console.log(err);
    })
  });

  return (
    <>
      <h1>Hello, This is my first full Stack project.</h1>
      <p>Jokes: {jokes.length}</p>
      {
        jokes.map((item, index) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </div>           
        ))
      }
    </>
  )
}

export default App