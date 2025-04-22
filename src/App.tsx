import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layout/Layout'
import Home from './components/Home/Home'
import Quiz from './components/Quiz/Quiz'

function App() {

  return (
      <BrowserRouter>
      <Layout>
          <Routes>
            
            <Route path='/' element={<Home />} />

            <Route path='/questionnaire' element={<Quiz />} />

          </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
