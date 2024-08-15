import React from 'react';
import {movieService} from "@/services/api.service";
import MoviesListCard from "@/components/MoviesListCard";

type Params = {
    Params : {id: string}
}
const MoviesListPage = async ({params}: Params) => {
    let infoMovie = await movieService.getMovieById(params.id);
    console.log(infoMovie.id);
    return (
        <div className={"items-center m-5 md:m-0"}>
            <h1 className={"text-cyan-500 text-center"}>Info Movie</h1>
            <MoviesListCard infoMovie={infoMovie}/>
        </div>
    );
};

export default MoviesListPage;