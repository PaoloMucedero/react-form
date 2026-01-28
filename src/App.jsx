import { useState } from 'react'
import './App.css'
import articles from "./assets/article.js"
import ArticlesList from './assets/ArticlesList.jsx'
import SingleArticle from './assets/SingleArticle.jsx'
import AddArticleForm from './assets/AddArticleForm.jsx'
import ToDoList from './assets/ToDoList.jsx'

function App() {

  const [userArticles, setUserArticles] = useState(articles)

  function addNewArticle(newArticle) {
    const updatedUserArticles = [...userArticles, newArticle];
    setUserArticles(updatedUserArticles)
  } 

  return(
    <>
      <ArticlesList articles={userArticles} />
      <AddArticleForm add={addNewArticle} />
      <ToDoList />
    </>
  )

}

export default App
