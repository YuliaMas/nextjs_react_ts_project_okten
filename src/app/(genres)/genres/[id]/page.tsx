import React from 'react';
import {genreService} from "@/services/api.service";
import MovieComponent from "@/components/MovieComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type Params = {
  params: { id: string },
  searchParams: {page: string}
}
const GenreByMoviesPage = async ({params, searchParams}: Params) => {
    console.log(`id: ${params.id} `);
    let id = params.id;
    const page = Number(searchParams?.page) || 1;
    let response;
    if(id) {
        response = await genreService.getMoviesByGenre(id, page);
        console.log(response);
    }
    return (
        <div>
           <h2>Movie Genre</h2>
                <div className={"grid grid-cols-7 justify-around wrap gap-5 m-12"}>
                    {
                        response.results.map(movie => (
                            <MovieComponent key={movie.id} movie={movie}/>
                        ))
                    }
                </div>
            <PaginationComponent page={page} totalPages={response.total_pages} />
        </div>
    );
};

export default GenreByMoviesPage;