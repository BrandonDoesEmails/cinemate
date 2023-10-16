import { useSearchParams } from "react-router-dom";
import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";
import { Card } from "../components";

export const Search = ({apiPath}) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");

    const { movies } = useFetch(apiPath, queryTerm);
    const pageTitle = useTitle(`Search results for ${queryTerm} - Cinemate`);
    
    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700  dark:text-white">
                    {movies.length === 0 ? `No Results Found for '${queryTerm}'` : `Results for '${queryTerm}'`}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map(movie => <Card key={movie.id} movie={movie} />)}
                </div>
            </section>
        </main>
    )
}
