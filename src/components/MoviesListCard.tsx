import React, {FC} from 'react';
import Image from "next/image";
import StarsRating from "@/components/StarsRating";
import Link from "next/link";
import {Badge} from "@mui/material";

type IProps = {
    infoMovie: IMovieById;
}
const MoviesListCard:FC<IProps> = ({infoMovie}) => {
    return (
        <div>
            <h2 className={"text-center text-4xl w-full font-bold text-indigo-800 "}>ID: {infoMovie.id} Title: {infoMovie.title}</h2>
            <br/>
            <div className={"flex justify-evenly items-center w-8/9 flex-wrap"}>
                <Badge color="default"  className={"anchorOriginTopRightRectangular"} badgeContent={
                    (<ul>{infoMovie.genres.map(genre => (
                        <li key={genre.id}>
                            <Link href={`/genres/${genre.id}`}> {genre.name} </Link>
                        </li>
                        ))}
                    </ul>)}>
                        <Image src={'https://image.tmdb.org/t/p/w500' + infoMovie.poster_path}
                               alt={infoMovie.title} width={500} height={500}/>
                </Badge>
                <div className={"w-3/12 "}>
                    <div className={"m-2 font-bold text-cyan-500"}>
                        <h3> Genres: </h3>

                        <ul>{infoMovie.genres.map(genre => (
                            <li key={genre.id}>
                            <Link href={`/genres/${genre.id}`}> {genre.name} </Link>
                            </li>
                          ))}
                        </ul>

                    </div>
                    <p>Overview: <br/> {infoMovie.overview}</p>
                    <br/>
                    <h4>Original title: {infoMovie.original_title}</h4>
                    <h4>Release date: {infoMovie.release_date}</h4>
                    <h4>Original language: {infoMovie.original_language}</h4>
                    <h4>Runtime: {infoMovie.runtime}</h4>
                    <h5>Average: {infoMovie.vote_average.toFixed(2)}</h5>
                    <h5>Production companies:
                        {infoMovie.production_companies.map(comp =>
                         (<span key={comp.id}>{comp.name} </span>))
                        }
                    </h5>
                    <h5>Production imdb_id: {infoMovie.imdb_id}</h5>
                    <StarsRating  rate={infoMovie.vote_average}/>
                </div>
            </div>
        </div>
    );
};
export default MoviesListCard;


