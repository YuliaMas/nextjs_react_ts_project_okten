'use client';
import React, {useEffect, useState} from 'react';
import {movieService} from "@/services/api.service";
import MoviesListComponent from "@/components/MoviesListComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";
import {useSearchParams} from "next/navigation";

const MoviesPage = async ()=> {
    // let [searchParams, setSearchParams] = useSearchParams<ReadonlyURLSearchParams>();
    // const pathname = usePathname();
    let searchParams = useSearchParams();
    let page = searchParams.get('page') ?? '1';

    let response = await movieService.getMovies(page);

    return (
        <div className={"w-full mx-auto content-center flex flex-col items-center"}>
            <h1 className={"text-6xl text-sky-600"}>Movies</h1>
            <div className={"grid grid-cols-7 justify-around wrap gap-5 m-12"}>
                {
                    response.map(movie => (
                        <MoviesListComponent movie={movie}/>
                    ))
                }
            </div>
            <PaginationComponent  />
        </div>
    );
};

export default MoviesPage;