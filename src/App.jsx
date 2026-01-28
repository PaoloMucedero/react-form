import { useState } from 'react'
import './App.css'
import articles from "./assets/article.js"
import ArticlesList from './assets/ArticlesList.jsx'
import SingleArticle from './assets/SingleArticle.jsx'
import AddArticleForm from './assets/AddArticleForm.jsx'


function App() {

  return(
    <>
      <ArticlesList articles={articles} />
      <AddArticleForm />
    </>
  )

}

export default App
