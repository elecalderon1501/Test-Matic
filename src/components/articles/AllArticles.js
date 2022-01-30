import axios from 'axios'
import { useEffect, useState } from 'react'
import Articles from './LatestArticles'
import style from './Articles.modules.css'

export default function AllArticles() {
  const [searchArticles, setSearchArticles] = useState([])

  const consultarApi = async () => {
    const url = `https://servicepad-post-api.herokuapp.com/articles/`
    const respuesta = await axios.get(url)
    console.log(respuesta.data.data)
    setSearchArticles(respuesta.data.data)
  }

  useEffect(() => {
    consultarApi()
  }, [searchArticles])

  return (
    <div>
      <ul>
        {searchArticles.map(el => (
          <>         
            <img key={el.id}  src={el.image_url} alt='imagen'></img>
            <p >{el.author}</p>
            <p >{el.title}</p>
            <p >{el.content}</p>
          </>
        ))}
      </ul>
    </div>
  )
}
