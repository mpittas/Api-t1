import Image from "next/image"
import SearchCatPage from "../pages/search-cats"

export default function Home() {
  return (
    <main>
      <section>
        <SearchCatPage />
      </section>
    </main>
  )
}
