import React from 'react';
import {genreService} from "@/services/api.service";
import GenreComponent from "@/components/GenreComponent";

const GenresPage = async () => {
    const genres = await genreService.getGenres();
    console.log(genres);
    return (
        <div>
            {
                genres.map((genre) => (
                    <GenreComponent key={genre.id} genre={genre}/>
                    // <li key={genre.id}>{genre.id} {genre.name}</li>
                ))
            }

        </div>
    );
};

export default GenresPage;