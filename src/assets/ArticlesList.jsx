import SingleArticle from "./SingleArticle"


const ArticlesList = ({articles}) => {

    return (
        <div className='list-group flex-center'>
            {articles.map(article => (
                <SingleArticle />
            ))}


        </div>
    )
}

export default ArticlesList