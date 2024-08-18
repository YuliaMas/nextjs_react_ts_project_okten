import React from "react";
import {genreService} from "@/services/api.service";
import GenreComponent from "@/components/GenreComponent";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: 'GenresLayout metadata'
};

type Props = {
    children: React.ReactNode;
}
export default async function GenresLayout({ children }: Props) {
    const genres = await genreService.getGenres();
    return (
        <div className="flex min-h-screen  flex-col md:flex-row items-center md:items-start">
            <div>
                <h1 className={"text-2xl mb-3 md:mb-0 md:text-6xl text-sky-600 text-center"}>Genres</h1>
                <div className="flex w-full flex-wrap md:w-2/12 flex-row md:flex-col pe-6 md:p-12 lg:p-6">
                    {
                        genres.map((genre) => (
                            <GenreComponent key={genre.id} genre={genre}/>
                        ))
                    }
                </div>
            </div>
            <main>
                {children}
            </main>
        </div>
    );
}