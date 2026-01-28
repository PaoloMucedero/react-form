import { useState } from "react"
// BASE PER RACCOGLIERE INPUT UTENTE TRAMITE VARIABILE DI STATO useState
function AddArticleForm({add}) {
    // variabile di stato 
    const [description, setDescription] = useState("")
    const [articleTitle, setArticleTitle] = useState("")
    // gestisco il submit dell'utente salvandolo in una variabile (il tag <form> ricarica la pagina, event.preventDefault() lo impedisce)
    const handleSubmit = () => {
        event.preventDefault();
        console.log(`Submit ricevuto! Il titolo articolo è:` + articleTitle);
        const newArticle = {
            id: self.crypto.randomUUID(),
            title: articleTitle,
            article: description,
        }
        add(newArticle)
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
            <label htmlFor="articleDesc">scrivi qui l'articolo</label>
            <input
                id="articleDesc"
                type="text"
                value={description}
                placeholder="descrione articolo"
                onChange={e => { setDescription(e.target.value) }}
            />
            <button>INVIA</button>

        </form>

    )

}

export default AddArticleForm