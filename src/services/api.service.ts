const tokenPair = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2I3ZDdhN2IzYjFmMzBiOGZkNzI4NTQ4ODI1N2M5ZSIsIm5iZiI6MTcyMzM3ODA2Ni41NDAyOTgsInN1YiI6IjY2YjY2ODZlOTVjNzllZjQ0NmU1ZDUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mfAVkQiwXoLnFkAPy4SUBKu9samY7wTmcZAHmtDUoY8';
const baseUrl = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + ' ' + tokenPair,
    },
};

export const authService = {
    getUser: async (): Promise<IUserStatus> => {
       let auth = await fetch(baseUrl + '/authentication', options)
            .then(response => response.json())
            .catch(err => console.error(err));
       return (auth);
    }
};

export const genreService = {
    getGenres: async ():Promise<IGenreMovies[]> => {
     let response = await fetch(baseUrl + '/genre/movie/list?language=en', options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
     // console.log(response.genres);
     return (response.genres);
    },
    getMoviesByGenre: async (genreId, page):Promise<IPages>=> {
        let response =  fetch(`https://api.themoviedb.org/3/discover/movie?page=${page}&sort_by=popularity.desc&with_genres=${genreId}`, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
        // console.log(response);
        return (response);
    }
};
export const movieService = {
    getMovies: async (page):Promise<IMovie[]> => {
        console.log(page);
     let response = await fetch(baseUrl + '/discover/movie?page=' + page, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
     // console.log(response.results);
     return (response.results);
    },
    getMoviesPages: async ():Promise<IPages> => {
        let response = await fetch(baseUrl + '/discover/movie', options)
                .then(response => response.json())
                .then(response => response)
                .catch(err => console.error(err));
        // console.log(response);
        return (response);
    },
    getMovieById: async (id):Promise<IMovieById> => {
        let response = await fetch(baseUrl + '/movie/' + id, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
        // console.log(response);
        return (response);
    }
};

export const searchService = {
    getAllMovies: async (page, query): Promise<IPages> => {
        let response = await fetch('https://api.themoviedb.org/3/search/movie?query='+ query +'&include_adult=false&language=en-US&page='+ page, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
        // console.log(response);
        return (response);
    }
};
export const videoService = {
    getAllTrailers: async(movieId):Promise<void> => {
        console.log({love: movieId.id});
        const response = await fetch(baseUrl + `/movie/${movieId.id}/videos?language=en-US`, options)
            .then(response => response.json())
            // .then(response => response.results)
            .catch(err => console.error(err))
        console.log(response.results);
        return response.results;
    }
}

// https://api.themoviedb.org/3/search/movie?query=like&page=6

// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=title.asc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'
