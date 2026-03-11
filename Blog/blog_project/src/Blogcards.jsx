function Blogcards(prop){
    return(
        <div className="card">

        <h2>{prop.title}</h2>
        <p>{prop.description}</p>
        <img src={prop.img}/>
        <a href={prop.link}>
        <button>Read More</button>
        </a>

        </div>
    );
}

export default Blogcards