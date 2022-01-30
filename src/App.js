import { Fragment } from 'react'
import Footer from './components/footer/Footer'
import LatestArticles from './components/articles/LatestArticles'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Hero />
        <LatestArticles/>
        <Footer />
      </Fragment>
    </div>
  )
}

export default App
