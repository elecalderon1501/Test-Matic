import axios from 'axios'
import { useEffect, useState } from 'react'
import './Articles.css'

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([])
  const latestArticles = allArticles.slice(-4)

  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage] = useState(5)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = allArticles.slice(indexOfFirstItem, indexOfLastItem)
  const pages = []

const numOfPages = Math.ceil(allArticles.length / itemsPerPage)

for (let i=1; i<= numOfPages; i++){
  pages.push(i)
}


  function pagination(e, page){
    e.preventDefault()
    setCurrentPage(page)
  } 
  

  const renderPageNumbers = pages.map(page => {
    <li key={page}>
      <div>
        <button onClick={e => pagination(e, page)}>{page}</button>
      </div>
    </li>
      })

  const consultarApi = async () => {
    const url = `https://servicepad-post-api.herokuapp.com/articles/`
    const respuesta = await axios.get(url)
    console.log(respuesta.data.data)
    setAllArticles(respuesta.data.data)
  }

  useEffect(() => {
    consultarApi()
  }, [allArticles])

  return (
    <div className="previousArticles">
      <h2>Previous Articles</h2>
      <h4>
        Review and edit previous blog posts published on to the homepage.{' '}
      </h4>
      <ul>
        {allArticles.map(el => (
          <div key={el.id} className="allArticles">
            <div className="previous">
              <p>{el.author}</p>
              <p>{el.title}</p>
              <p>{el.content}</p>
              <p>{el.date}</p>
              <button
                className="editArticle"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </ul>

      <ul className="pageNumbers">{renderPageNumbers}</ul>

      <div className="title_latest">
        <h2>Latest Articles</h2>
      </div>
      <div>
        {latestArticles.map(el => (
          <div key={el.id} className="latest_articles">
            <div className="one">
              <img src={el.image_url} alt="imagen" />
            </div>
            <div className="two">
              <p>{el.author}</p>
            </div>
            <div className="three">
              <p>{el.title}</p>
            </div>
            <div className="four">
              <p>{el.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
