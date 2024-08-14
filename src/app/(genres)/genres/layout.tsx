import React from "react";
import {genreService} from "@/services/api.service";
import GenreComponent from "@/components/GenreComponent";

export default async function Layout({ children }: { children: React.ReactNode}) {
    const genres = await genreService.getGenres();
    return (
        <div className="flex ">
            <h2>Genres</h2>
            <div className="flex w-2/12 flex-col p-6 md:p-12">
                    {
                        genres.map((genre) => (
                            <GenreComponent key={genre.id} genre={genre} />
                        ))
                    }
            </div>
            {children}
        </div>
    );
}