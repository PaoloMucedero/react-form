import { useState } from 'react'
import './App.css'
import articles from "./assets/article.js"
import ArticlesList from './assets/ArticlesList.jsx'
import SingleArticle from './assets/SingleArticle.jsx'


function App() {

  return(
    <ArticlesList articles={articles} />
    
  )

}

export default App
