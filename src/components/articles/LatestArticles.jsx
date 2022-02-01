import React, { useState } from 'react'
import AllArticles from './AllArticles'
import style from './Articles.modules.css'
import allArticles from './AllArticles'

const LatestArticles = () => {
  const latestArticles = allArticles.slice(allArticles.length (- 4), allArticles.length)

  return (
    <div>
      <h2>Latest Articles</h2>
      {latestArticles.map(el => (
        <div>
          <img src={el.image_url} alt="imagen" />
          <p>{el.author}</p>
          <p>{el.title}</p>
          <p>{el.content}</p>
        </div>
      ))}
    </div>
  )
}

export default LatestArticles
