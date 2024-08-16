interface IUserStatus {
    success: boolean,
    status_code: number,
    status_message: string,
}

interface IGenreMovies {
    id: number;
    name: string;
}
interface IGenresMovies {
    genres: IGenreMovies[];
}

interface IMovie {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}

interface SearchParamsProps {
    searchParams?: {
        page?: string;
        query?: string;
    };
}

interface IPages {
    total_pages: number,
    total_results: number,
    results: IMovie[],
    page: number
}

interface IMovieById {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: null | {
        id: number,
        name: string,
        poster_path: string,
        backdrop_path: string,
    },
    budget: number,
    genres: [
        { id: 35, name: 'Comedy' },
        { id: 18, name: 'Drama' },
        { id: 10749, name: 'Romance' }
    ],
    homepage: string,
    id: number,
    imdb_id: string,
    origin_country:  string[],
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: [
        {
            id: number,
            logo_path: string | null,
            name: string,
            origin_country: string,
        }
    ],
    production_countries: [ { iso_3166_1: string, name: string } ],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: [
        { english_name: string, iso_639_1: string, name: string },
        { english_name: string, iso_639_1: string, name: string },
        { english_name: string, iso_639_1: 'sv', name: string }
    ],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number,
}