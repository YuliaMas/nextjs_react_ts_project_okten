'use client';
import React, {FC} from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

type IProps = {
    genre: IGenreMovies;
}
const GenreComponent:FC<IProps> = ({genre}) => {
    const pathName = usePathname();
    return (
                <ul className="w-52 rounded-md bg-secondary font-bold text-sky-800 m-1 md:block p-2">
                        <Link  key={genre.id} href={`/genres/${genre.id}`} >
                            <li key={genre.id}   className={pathName === `/genres/${genre.id}`? "text-yellow-700 font-bol text-2xl" : ""}>
                                {genre.name} </li>
                        </Link>
                    </ul>
    );
};

export default GenreComponent;