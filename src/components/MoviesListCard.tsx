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
            <h2 className={"text-center text-4xl w-full font-bold text-indigo-800 "}> Title: {infoMovie.title} </h2>
            <br/>
            <div className={"flex flex-row justify-evenly items-center w-8/9 flex-wrap lg:m-16"}>
                <Badge color="default"  className={"font-bold  p-4 border-2 rounded hidden md:visible md:block"} badgeContent={
                    (<ul className={"border-2 p-4 bg-secondary text-yellow-400 font-bold rounded-full"}>{infoMovie.genres.map(genre => (
                        <li key={genre.id}>
                            <Link href={`/genres/${genre.id}`}> {genre.name} </Link>
                        </li>
                        ))}
                    </ul>)}>
                        <Image src={'https://image.tmdb.org/t/p/w500' + infoMovie.poster_path}
                               alt={infoMovie.title}
                               width="0"
                               height="0"
                               sizes="100vw"
                               className={"w-auto h-auto border-4xl border-amber-200 rounded"}/>
                </Badge>
                <div className={"w-full md:w-4/12"}>
                    <div className={"m-2 font-bold text-cyan-500"}>
                        <h4>Original title: {infoMovie.original_title}</h4>
                        <h4>Release date: {infoMovie.release_date}</h4>
                        <h4>Original language: {infoMovie.original_language}</h4>
                        <h4>Runtime: {infoMovie.runtime} min</h4>
                        <h5>Average: {infoMovie.vote_average.toFixed(2)}</h5>
                        <h5>Production companies:
                            {infoMovie.production_companies.map(comp =>
                                (<span key={comp.id}> {comp.name} </span>))
                            }
                        </h5>
                        <h5>Production imdb_id: {infoMovie.imdb_id}</h5>
                        <p>Overview: <br/> {infoMovie.overview}</p>
                        <StarsRating rate={infoMovie.vote_average}/>
                        <h3 className={"text-2xl"}> Genres: </h3>
                        <ul className={"flex gap-5"}>{infoMovie.genres.map(genre => (
                            <li key={genre.id}>
                                <Link href={`/genres/${genre.id}`}> {genre.name} </Link>
                            </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MoviesListCard;


