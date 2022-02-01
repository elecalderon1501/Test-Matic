import { Fragment } from 'react'
import Footer from './components/footer/Footer'
import LatestArticles from './components/articles/LatestArticles'
import Navbar from './components/navbar/Navbar'
import AllArticles from './components/articles/AllArticles'
import CreateArticle from './components/articles/CreateArticle'

function App() {
  return (
    <div className="App">
      <Fragment>
        <Navbar />
        <CreateArticle/>
        <AllArticles/>
        <LatestArticles/>
        <Footer />
      </Fragment>
    </div>
  )
}

export default App
