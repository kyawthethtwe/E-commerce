import SearchResults from "@/components/search-result"
interface SearchParams {
    q?: string;
    category?: string;
  }
export default function SearchPage({searchParams}: {searchParams: SearchParams}) {
  const query = searchParams.q || ""
  const category = searchParams.category || ""
  console.log("search params",searchParams)
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Search Results for &quot;{searchParams.q}&quot;</h1>
      <SearchResults query={searchParams.q}  category={searchParams.category}/>
    </div>
  )
}

