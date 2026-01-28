import SingleArticle from "./SingleArticle"


const ArticlesList = ({articles}) => {

    return (
        <div className='list-group flex-center'>
            {articles.map(article => (
                <SingleArticle key={article.id} title={article.title} description={article.article} />
            ))}


        </div>
    )
}

export default ArticlesList