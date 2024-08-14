import React, {FC} from 'react';
import Image from "next/image";

type IProps = {
    infoMovie: IMovieById;
}

const MoviesListCard:FC<IProps> = ({infoMovie}) => {
    return (
        <div>
            <h2 className={"text-center text-4xl w-full font-bold text-indigo-800 "}>ID: {infoMovie.id} Title: {infoMovie.title}</h2>
            <br/>
            <div className={"flex justify-evenly items-center w-8/9 flex-wrap"}>
                <Image src={'https://image.tmdb.org/t/p/w500' + infoMovie.poster_path}
                       alt={infoMovie.title} width={500} height={500}/>
                <div className={"w-3/12 "}>
                    <div className={"m-2 font-bold text-cyan-500"}>
                        <h3> Genres: </h3>
                        <ul>{infoMovie.genres.map(genre => (
                            <li key={genre.id}>{genre.id} {genre.name}</li>
                        ))}
                        </ul>
                    </div>
                    <p>{infoMovie.overview}</p>
                    <br/>
                    <h4>{infoMovie.popularity}</h4>
                    <h4>{infoMovie.original_title}</h4>
                    <h4>{infoMovie.release_date}</h4>
                    <h4>{infoMovie.runtime}</h4>
                    <h5>{infoMovie.vote_average}</h5>
                </div>
            </div>
        </div>
    );
};

export default MoviesListCard;


