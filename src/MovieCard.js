import React from "react"

function MovieCard(props)
{
    const {id, poster_path, backdrop_path, title, original_title, original_language, overview, vote_average, adult, release_date} = props.movie
    
    const [imgPath, setImgPath] = React.useState(poster_path)
    
    function showBackDrop()
    {
        setImgPath(backdrop_path)
    }
    
    function showPoster()
    {
        setImgPath(poster_path)
    }
    
    return(
        <div className="movie-card">
             <img src={imgPath ? `https://image.tmdb.org/t/p/w185_and_h278_bestv2${imgPath}` : `movie-poster-general.jpg`} alt={`${title} poster`} className="movie-card-img" onMouseOver={showBackDrop} onMouseOut={showPoster} style={{cursor: "pointer"}}/>
            <h2>{title}{title !== original_title ? `(${original_title})` : ""}</h2>
            <p className="movie-meta">
                <small className="rating">{`RATING: ${"⭐ " + vote_average}`}</small>
                {!adult && <small className="safe">{`😜 SAFE FOR KIDS`}</small>}
                <small className="release-date">{`RELEASED ON: ${"📆 " + release_date}`}</small>
                <small className="language">{`LANGUAGE: ${original_language}`}</small>
            </p>
            <p>{overview}</p>
        </div>
    )
}

export default MovieCard