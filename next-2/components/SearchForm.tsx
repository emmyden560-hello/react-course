import { Search } from "lucide-react";
import FormReset from "./formreset";


export default function SearchForm({ query }: { query?: string }) {
    return (
        <form action="/" className="search-form">
            <input
                type="text"
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />

            <div className="flex gap-2">
                {query && <FormReset />}

                <button type="submit" className="search-btn text-white">
                    <Search className="size-5"/>
                </button>
            </div>
        </form>
    )
}