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
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <div className="hidden h-auto w-60 grow rounded-md bg-secondary font-bold text-sky-800  md:block">
                    <ul className="w-full flex-none md:w-64 ">

                        <Link    key={genre.id}
                                 href={`/genres/${genre.id}`}
                                 className={pathName === `/genres/${genre.id}`? "active" : ""}>

                            <li key={genre.id}>{genre.name} {genre.id}</li>

                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default GenreComponent;