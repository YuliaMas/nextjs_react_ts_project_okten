import React, {Suspense} from 'react';
import {searchService} from "@/services/api.service";
import MovieComponent from "@/components/MovieComponent";
import PaginationComponent from "@/components/pagination/PaginationComponent";

type Params = {
    searchParams: {
        page?: string,
        query?: string,
    }
}

const SearchPage = async ({searchParams}: Params) => {
    const page = Number(searchParams?.page) || 1;
    const query = searchParams?.query || '';
    const response= await searchService.getAllMovies(page, query);
    return (
        <div className={"flex flex-col justify-center items-center justify-items-center "}>
            <Suspense key={query + page}>
                <div className={"w-full justify-center grid lg:grid-cols-5 lg:justify-around wrap gap-6 md:justify-around  lg:w-full  md:grid-cols-2 pt-4 pb-4"}>
                    {
                        response.results.map(movie => (
                            <MovieComponent key={movie.id} movie={movie}/>
                        ))
                    }
                </div>
            </Suspense>
            {query.length > 0 && response.total_pages > 0 && (<PaginationComponent page={page} totalPages={response.total_pages}/>)}
        </div>
    );
};

export default SearchPage;