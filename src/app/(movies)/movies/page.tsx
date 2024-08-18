'use server';
import React from 'react';
import {movieService} from "@/services/api.service";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import MovieComponent from "@/components/MovieComponent";

type PropsParamsType = {
    searchParams? : {page?: string};
}
const MoviesPage = async({searchParams,}: PropsParamsType)=> {
    const page = Number(searchParams?.page) || 1;
    let response = await movieService.getMovies(page|| 1);
    let res = await movieService.getMoviesPages();
    let totalPages = res.total_pages;
    return (
        <div className={"flex flex-col justify-items-center"}>
            <h1 className={"text-6xl text-sky-600 text-center"}>Movies</h1>
            <div
                className={"w-full grid  justify-center lg:grid-cols-5 lg:justify-around wrap gap-6 md:justify-around md:m-0 lg:w-full md:grid-cols-2 pt-4 pb-4"}>
                {
                    response.map(movie => (
                        <MovieComponent key={movie.id} movie={movie}/>
                    ))
                }
            </div>
            <PaginationComponent page={page} totalPages={totalPages}/>
        </div>
    );
};
export default MoviesPage;