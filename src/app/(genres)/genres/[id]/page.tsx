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
    }
    return (
        <div className={"w-full"}>
            <div className={"pt-20 pb-10 flex flex-wrap justify-evenly lg:min-w-full lg:grid-cols-6 lg:w-full lg:justify-around wrap gap-8 m-12 md:justify-end grid-cols-2 md:m-0 md:w-full  md:grid-cols-2 md:text-right"}>
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