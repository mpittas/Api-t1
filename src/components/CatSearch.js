import {useState, useEffect} from "react"

const CatSearch = ({onSearch}) => {
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])

  useEffect(() => {
    if (searchTerm.length > 2) {
      fetchSuggestions()
    } else {
      setSuggestions([])
    }
  }, [searchTerm])

  const fetchSuggestions = async () => {
    // Fetch your suggestions here based on searchTerm
    // This is just a placeholder, replace with your actual fetch call
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`
    )
    const data = await response.json()
    setSuggestions(data)
  }

  const handleSearch = () => {
    onSearch(searchTerm)
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Search for a cat breed..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {suggestions.map((suggestion) => (
        <div key={suggestion.id} onClick={() => setSearchTerm(suggestion.name)}>
          {suggestion.name}
        </div>
      ))}
      <button onClick={handleSearch}>Search</button>
    </div>
  )
}

export default CatSearch
