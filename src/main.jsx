import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Hero from './Hero'
import Card from './Card'
import cardData from './cardData'

const card = cardData.map(card => {
  return <Card 
            key = {card.id}
            item = {card}
          />
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hero />
    <section className='card-container'>
      {card}
    </section>
  </React.StrictMode>
)
