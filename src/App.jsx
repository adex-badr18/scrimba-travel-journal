import './App.css'
import Header from './components/Header';
import TravelCard from './components/TravelCard';
import travelData from './data';

function App() {
  const cards = travelData.map(card => {
    return <TravelCard 
      key={card.id}
      {...card}
    />
  })
  return (
    <div className='container'>
      <Header />

      <section className='travels-list'>
        {cards}
      </section>
    </div>
  )
}

export default App
