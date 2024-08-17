import React from 'react';
import {movieService, videoService} from "@/services/api.service";
import MoviesListCard from "@/components/MoviesListCard";
import VideoComponent from "@/components/VideoComponent";

type Params = {
    params : {id: string}
}
const MoviesListPage = async ({params}: Params) => {
    let infoMovie = await movieService.getMovieById(params.id);
    let videoData = await videoService.getAllTrailers(params.id);
    console.log(videoData);
    return (
        <div className={"items-center m-5 md:m-0 flex flex-col justify-center"}>
            <h1 className={"text-cyan-500 text-center"}>Info Movie</h1>
            <MoviesListCard infoMovie={infoMovie}/>
            <div className={"w-full"}>
                <div  className={"flex justify-evenly flex-wrap gap-5"}>
                    <VideoComponent videoData={videoData} />
                </div>
            </div>
        </div>
    );
};
export default MoviesListPage;