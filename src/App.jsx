import './assets/stylesheet/App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Score from './components/Score'
import Categories from './components/Categories'
import Questions from './components/Questions'

function App() {

  return (
    <div className='container'>
      <Header />
      <Routes>
        <Route path='/' element={<Hero />} />
        <Route path='/result/:correctAnswer/:qesNo/:studentId' element={<Score />} />
        <Route path='/categories/:studentId' element={<Categories />} />
        <Route path='/quiz/:qesNo/:id/:diffValue/:studentId' element={<Questions />} />
      </Routes>
    </div>
  )
}

export default App
