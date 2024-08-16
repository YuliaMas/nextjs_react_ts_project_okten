import React, {FC} from 'react';
import Image from "next/image";
import Link from "next/link";
import StarsRating from "@/components/StarsRating";

type IProps = {
    movie: IMovie;
}
const MovieComponent:FC<IProps> = ({movie}) => {
    return (
            <div className={"h-full w-min contain-content justify-center lg:justify-around items-center  rounded-2xl text-center lg:w-64"}>
                <Link href={`/movies/${movie.id}`} >
                    {
                        movie.poster_path ? (
                                <div className={"contain-content"}>
                                    <Image src={'https://image.tmdb.org/t/p/w300' + movie.poster_path}
                                           className={"transition-transform hover:cursor-pointer hover:scale-110 rounded-2xl border-b-cyan-900 border-8 max-w-80 max-h-80 md:w-42 lg:w-64 w-64 lg:min-w-24"}
                                           alt={movie.title}
                                           width={300}
                                           height={300}
                                           priority/>
                                </div>
                        ) : ( <div className={"contain-content  flex justify-items-center rounded-2xl border-8 border-b-cyan-900  lg:w-64 min-h-80 max-w-80 max-h-80"} >
                                <Image src="/MovieApp1.jpg"
                                       className={"border-b-cyan-900 border max-w-80 max-h-80 md:w-42 w-64 lg:w-58 lg:min-w-24 opacity-50 bg-white "}
                                       alt={movie.title}
                                       width={300}
                                       height={300}
                                       priority/>
                             </div>
                        )
                    }

                    <StarsRating  rate={movie.vote_average}/>
                     <h2 className={"font-bold text-lg"}>{movie.title}</h2>
                </Link>
            </div>
    );
};
export default MovieComponent;