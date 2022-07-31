import React from "react"

function SearchMovies({appState, stateSetter, apiKey, appUsedSetter, showingResultsFor})
{
    function handleChange(event)
    {
        const {name, value} = event.target
        stateSetter(prevAppState => ({...prevAppState, [name]: value}))
    }
    
    function searchMovies()
    {
        const query = appState.searchQuery
        
        const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=1`
         
        appUsedSetter(true)
        
        fetch(url).then(data => data.json()).then(response => stateSetter(prevAppState =>({...prevAppState, loading: false, results: response.results})))
        
        showingResultsFor(appState.searchQuery)
        stateSetter(prevAppState => ({...prevAppState, searchQuery: "", loading: true}))
    }
     
    return(
        <div className="form">
            <label htmlFor="query">Search Movies</label>
            <input type="text" name="searchQuery" id="query" placeholder="Ex. Vikram" value={appState.searchQuery} onChange={handleChange}/>
            <button className="search-btn" onClick={searchMovies}>Search</button>
            <p>{`${appState.results.length} results found`}</p>
        </div>
    )
}

export default SearchMovies