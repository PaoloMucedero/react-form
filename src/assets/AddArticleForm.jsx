import { useState } from "react"

function AddArticleForm() {
    const [articleTitle, setArticleTitle] = useState("esempio")


    return (
        <input type="text" value={articleTitle}/>
    )

}

export default AddArticleForm