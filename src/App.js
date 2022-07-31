import React from "react"
import SearchMovies from "./SearchMovies"
import MovieCard from "./MovieCard"

function App({apiKey})
{
    const [state, setState] = React.useState({searchQuery: "", loading: false, results: []})
    const [appUsed, setAppUsed] = React.useState(false)
    const [showingResultsFor, setShowingResultsFor] = React.useState("")
    
    const resultMovieCards = state.results.map(movie => <MovieCard key={movie.id} movie={movie}/>)
    
    return(
        <>
            <h1>Movies Search App</h1>
            <SearchMovies appState={state} stateSetter={setState} apiKey={apiKey} appUsedSetter={setAppUsed} showingResultsFor={setShowingResultsFor}/>
            {Boolean(state.results.length) && Boolean(showingResultsFor) && <h2 style={{textAlign: "center"}}>Results for your query "{showingResultsFor}"</h2>}
            <div className="movie-cards-wrapper">
                {state.loading ? <img src="loading.gif" alt="results are being fetched" /> : state.results.length ? resultMovieCards : showingResultsFor ? <h1>No results found for your query "{showingResultsFor}"</h1> : ""}
            </div>
        </>
    )
}

export default App