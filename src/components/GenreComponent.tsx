'use client';
import React, {FC} from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import {clsx} from "clsx";

type IProps = {
    genre: IGenreMovies;
}
const GenreComponent:FC<IProps> = ({genre}) => {
    const pathName = usePathname();
    return (
                <ul className="w-52 rounded-md bg-secondary font-bold text-sky-800 m-1 md:block p-2">
                        <Link  key={genre.id} href={`/genres/${genre.id}`}
                               className={clsx(
                                   'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-sky-200 p-3 text-sm font-medium hover:bg-sky-300 hover:text-yellow-600 md:flex-none md:justify-start md:p-2 md:px-3',
                                   {
                                       'bg-sky-400 text-blue-600': pathName ===  `/genres/${genre.id}`
                                   },
                               )}
                        >
                            <li key={genre.id}   className={pathName === `/genres/${genre.id}`? "text-yellow-700 font-bol text-2xl" : ""}>
                                {genre.name} </li>
                        </Link>
                    </ul>
    );
};

export default GenreComponent;