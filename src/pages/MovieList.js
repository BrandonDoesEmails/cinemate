import { useFetch } from "../Hooks/useFetch";
import { useTitle } from "../Hooks/useTitle";
import { Card } from "../components";

export const MovieList = ({apiPath, title}) => {
    const { movies } = useFetch(apiPath);
    useTitle(title);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                   {movies.map(movie => <Card key={movie.id} movie={movie} />)}
                </div>
            </section>
        </main>
    )
}
