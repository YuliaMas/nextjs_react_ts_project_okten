const tokenPair = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5Y2I3ZDdhN2IzYjFmMzBiOGZkNzI4NTQ4ODI1N2M5ZSIsIm5iZiI6MTcyMzM3ODA2Ni41NDAyOTgsInN1YiI6IjY2YjY2ODZlOTVjNzllZjQ0NmU1ZDUwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mfAVkQiwXoLnFkAPy4SUBKu9samY7wTmcZAHmtDUoY8';
const baseUrl = 'https://api.themoviedb.org/3';

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer' + ' ' + tokenPair,
    }
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
     console.log(response.genres);
     return (response.genres);
    }
};
export const movieService = {
    getMovies: async (pageValue):Promise<IMovie[]> => {
     let response = await fetch(baseUrl + '/discover/movie?page=' +  pageValue, options)
            .then(response => response.json())
            .then(response => response)
            .catch(err => console.error(err));
     console.log(response.results);
     return (response.results);
    },
    getMoviesPages: async ():Promise<IPages> => {
        let response = await fetch(baseUrl + '/discover/movie', options)
                .then(response => response.json())
                .then(response => response)
                .catch(err => console.error(err));
        console.log(response);
        return (response);
    }
}


// fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=true&language=en-US&page=1&sort_by=title.asc', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
// https://api.themoviedb.org/3/movie/movie_id/videos?language=en-US'
