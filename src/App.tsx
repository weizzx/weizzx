import './App.css'
import './css/Animations.css'
import Preloader from "./components/Preloader.tsx"
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'

function App() {

  return (
    <>
    <Preloader />
    <Header />
    <Home />
    </>
  )
}

export default App
