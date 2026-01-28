import { useState } from "react"
// BASE PER RACCOGLIERE INPUT UTENTE TRAMITE VARIABILE DI STATO useState
function AddArticleForm() {
    // variabile di stato 
    const [articleTitle, setArticleTitle] = useState("")
    const [newArticle, setNewArticle] = useState("")
    // gestisco il submit dell'utente salvandolo in una variabile (il tag <form> ricarica la pagina, event.preventDefault() lo impedisce)
    const handleSubmit = () => {
        event.preventDefault();
        console.log(`Submit ricevuto! Il titolo articolo è:` + articleTitle);
        
    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor="nameArticle">Scrivi qui il titolo</label>
            <input
                id="nameArticle"
                type="text"
                value={articleTitle}
                placeholder="titolo articolo"
                onChange={e => { setArticleTitle(e.target.value) }}
            />
            <p>{articleTitle}</p>
            <button>INVIA</button>

        </form>

    )

}

export default AddArticleForm