const CatCard = (props) => {
    return(
        <article>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
        </article>
    )
}

export default CatCard;