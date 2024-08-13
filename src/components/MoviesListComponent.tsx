import React, {FC} from 'react';
import Image from "next/image";

type IProps = {
    movie: IMovie;
}
const MoviesListComponent:FC<IProps> = ({movie}) => {
    return (
        <div className={"w-full"}>
            <Image src={'https://image.tmdb.org/t/p/w200' + movie.poster_path} alt={movie.title}/>
            <h2 className={"font-bold text-lg"}>{movie.title}</h2>
            <h3>{movie.id}</h3>
        </div>
    );
};

export default MoviesListComponent;