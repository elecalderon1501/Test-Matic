import axios from 'axios'
import { useEffect, useState } from 'react'
import style from './Articles.modules.css'
import CreateArticle from './CreateArticle'

export default function AllArticles() {
  const [allArticles, setAllArticles] = useState([])

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
    <div>
      <ul>
        {allArticles.map(el => (
          <div key={el.id} className='allArticles' >         
            {/* <img   src={el.image_url} alt='imagen'></img> */}
            <p >{el.author}</p>
            <p >{el.title}</p>
            <p >{el.content}</p>
          </div>
        ))}
      </ul>
    </div>
  )
}
