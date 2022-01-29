import { Fragment } from 'react'
import AllArticles from './components/articles/AllArticles'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <Hero />
        <AllArticles />
        <Footer />
      </Fragment>
    </div>
  )
}

export default App
