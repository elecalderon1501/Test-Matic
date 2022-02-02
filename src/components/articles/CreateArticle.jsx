import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import './Articles.css'
const CreateArticle = () => {
  const [author, setAuthor] = useState('')
  const [content, setContent] = useState('')
  const [title, setTitle] = useState('')

  const [error, setError] = useState('')

  const newArticle = {
    author,
    content,
    title,
  }

  const handleSubmit = e => {
    e.preventDefault()
    if([author, title, content].includes('')){
      setError(true)
      return;
    }
    setError(false)

    const createArticleApi = async () => {
      const url = `https://servicepad-post-api.herokuapp.com/articles/`
      const respuesta = await axios.post(url, { newArticle })
      console.log(respuesta.data.data)
      //  setAllArticles(respuesta.data.data)
    }
    //reinicio form
    setAuthor('')
    setTitle('')
    setContent('')
  }
  return (
    <div className="create">
      <h2>Add New Blog Article</h2>
      <h4>Publish a new blog article to feature in the Easybank homepage.</h4>

      <form className="form" onSubmit={handleSubmit}>

        {error && <h4 className='error'>ERROR</h4>}
        <div className="formAuthor">
          <label htmlFor="author">Author</label>
          <input
            id="author"
            type="text"
            placeholder="Author"
            value={author}
            onChange={e => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="title">Title</label>
          <input
            id="title"
            type="text"
            placeholder="Title"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="content">Content</label>
          <textarea
            id="content"
            type="text"
            placeholder="Content"
            value={content}
            onChange={e => setContent(e.target.value)}
          />
        </div>
        {/* <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          placeholder="Date"
          value={date}
          onChange={e => setDate(e.target.value)}
        /> */}
        <div>
          <button
            className="buttonSubmit"
            type="submit"
            value="Add article"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>{' '}
      </form>
    </div>
  )
}

export default CreateArticle
