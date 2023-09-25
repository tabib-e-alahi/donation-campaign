
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {

  const [cards,setCards] = useState([])

  useEffect(()=>{
    fetch('category_cards.json')
    .then(res => res.json())
    .then(data => setCards(data))
  },[])

  return (
    <>
      
      <h1>Vite + React: {cards.length}</h1>
      <h5>Hlw form Tabib</h5>
      {
        cards.map(card => <div key={card.id}>
          <h1 >{card.title}</h1>
          <img src={card.img} alt="" />
        </div>)
      }
    </>
  )
}

export default App
