import articles from "./article";

function SingleArticle({ title, article }) {
    return (
        <article className='list-group-item'>
            <h3>{article.title}</h3>
            <p>{article.article}</p>
        </article>
    )
}

export default SingleArticle