import './App.css'
import Header from './components/Header';
import TravelCard from './components/TravelCard';

function App() {
  return (
    <div className='container'>
      <Header />

      <section className='travels-list'>
        <TravelCard />
      </section>
    </div>
  )
}

export default App
