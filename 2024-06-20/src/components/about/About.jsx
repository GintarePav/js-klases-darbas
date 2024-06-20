const About = (props) => {
    return(
        <div className="m-3">
            <h3>Hi - About</h3>
            <p><span>Today's date: </span>{props.date}</p>
        </div>
    )
    
}

export default About;