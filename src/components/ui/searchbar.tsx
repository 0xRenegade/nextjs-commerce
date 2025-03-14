import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useRouter } from "next/navigation"

library.add(faMagnifyingGlass)

// TODO
// Turn this into Dialog component
// with search results from backend instead
export default function SearchBar() {
  const [search, setSearch] = useState("")
  const router = useRouter()

  const handleKeyUp = (e: { key: string }) => {
    if (!search) {
      return
    }

    if (e.key === "Enter") {
      router.push(`/products?q=${search}`)
    }
  }

  return (
    <div className="search-wrapper">
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
      <input
        onChange={(e) => {
          setSearch(e.target.value)
        }}
        onKeyUp={handleKeyUp}
        className="search-input"
        type="text"
        placeholder="Search"
      ></input>
    </div>
  )
}
