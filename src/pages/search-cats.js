"use client"
import {useState} from "react"
import CatSearch from "../components/CatSearch" // Ensure this is renamed appropriately

const SearchCatsPage = () => {
  const [cats, setCats] = useState([])

  const fetchCats = async (searchTerm) => {
    const response = await fetch(
      `https://api.thecatapi.com/v1/breeds/search?q=${searchTerm}`,
      {
        headers: {
          "x-api-key": process.env.NEXT_PUBLIC_CAT_API_KEY,
        },
      }
    )
    const data = await response.json()
    setCats(data)
  }

  return (
    <div>
      <CatSearch onSearch={fetchCats} />
      <div>
        {cats.map((cat) => (
          <div key={cat.id}>
            <img src={cat.image.url} alt={cat.name} />
            <h2>{cat.name}</h2>
            <p>{cat.temperament}</p>
            <p>{cat.origin}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SearchCatsPage
