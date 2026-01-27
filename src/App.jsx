import { useState } from 'react'
import './App.css'
import articles from "./assets/article.js"




function App() {
  console.log(articles)

  return(
    <div className='list-group flex-center'>
      <article className='list-group-item'>
        <h3>Titolo articolo</h3>
        <p>TESTO ARTICOLO</p>
      </article>

    </div>
    
  )

}

export default App
