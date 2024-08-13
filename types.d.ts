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