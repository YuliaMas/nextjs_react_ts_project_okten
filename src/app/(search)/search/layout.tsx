import React from 'react';
import SearchBar from "@/components/search/SearchBar";

type Props = {children: React.ReactNode};
const SearchLayout =  ({children}: Props) => {
    return (
            <div className={"w-full mx-auto content-center flex flex-col items-center relative min-h-screen"}>
                <h1 className={"text-6xl text-sky-600 text-center"}>Search Movies</h1>
                <div className={"flex justify-center m-8"}>
                    <SearchBar placeholder={"Search Movies ..."}/>
                </div>
                <main>
                    {children}
                </main>
            </div>
    );
};

export default SearchLayout;