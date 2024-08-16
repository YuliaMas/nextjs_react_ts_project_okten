import React from "react";
import {genreService} from "@/services/api.service";
import GenreComponent from "@/components/GenreComponent";

export default async function Layout({ children }: { children: React.ReactNode}) {
    const genres = await genreService.getGenres();
    return (
        <div className="flex  flex-col md:flex-row items-center md:items-start">
            <div>
                <h1 className={"text-2xl mb-3 md:mb-0 md:text-6xl text-sky-600 text-center"}>Genres</h1>
                <div className="flex w-2/12 flex-col pe-6 md:p-12 lg:p-6">
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