function SingleArticle({ title, description }) {
    return (
        <article className='list-group-item'>
            <h3>{title}</h3>
            <p>{description}</p>
        </article>
    )
}

export default SingleArticle