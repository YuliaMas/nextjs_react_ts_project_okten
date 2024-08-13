// 'use client';
'use server';
import React from 'react';
import {movieService} from "@/services/api.service";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import MovieComponent from "@/components/MovieComponent";

type PropsPageType = {
    page?: string
}
type PropsParamsType = {
    searchParams? : PropsPageType;
}

const MoviesPage = async({searchParams,}: PropsParamsType)=> {
    const page = Number(searchParams?.page) || 1;
    let response = await movieService.getMovies(page|| 1);
    let res = await movieService.getMoviesPages();
    let totalPages = res.total_pages;
    return (
        <div>
            <div className={"grid grid-cols-7 justify-around wrap gap-5 m-12"}>
                {
                    response.map(movie => (
                        <MovieComponent  key={movie.id} movie={movie}/>
                    ))
                }
            </div>
             <PaginationComponent page={page} totalPages={totalPages}/>
          </div>
    );
};

export default MoviesPage;