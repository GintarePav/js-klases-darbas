

const Article = (props) => {
    return(
        <article>
            <h3>{props.title}</h3>
            <p>{props.description}</p>
            <a href="#">Daugiau...</a>
        </article>
    )
}

export default Article;