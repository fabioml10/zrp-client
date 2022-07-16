import { useState } from "react"
import Abilities from "../abilities"
import ErrorMessage from "../errorMessage"
import Loading from "../loading"
const axios = require('axios')

interface Ability {
  abilities: string[]
}

export const Search: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [abilities, setAbilities] = useState<Ability>({ abilities: [] })
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const clear = () => {
    setAbilities({ abilities: [] })
    setError(null)
  }

  const handleSearch = async () => {
    if (searchTerm.length === 0) return
    clear()
    setIsLoading(true)

    const url = `${process.env.REACT_APP_API_URL}?q=${searchTerm}`

    axios.get(url)
      .then((response: any) => {
        setAbilities(response.data)
      })
      .catch((error: any) => {
        setError(error.response.data.error)
      })
      .finally(() => {
        setIsLoading(false)
      }, [])
  }

  return (
    <>
      <input onChange={e => setSearchTerm(e.target.value)}></input>
      <button onClick={handleSearch} disabled={searchTerm.length === 0}>Search</button>
      {!error && abilities && <Abilities abilities={abilities.abilities} /> }
      {error && <ErrorMessage message={error} />}
      {isLoading && <Loading />}
    </>
  )
}

export default Search
