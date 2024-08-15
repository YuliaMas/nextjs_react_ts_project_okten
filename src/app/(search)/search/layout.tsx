import React from 'react';
import SearchBar from "@/components/search/SearchBar";

type Props = {children: React.ReactNode};
const Layout =  ({children}: Props) => {
    return (
        <div>
            <div className={"w-full mx-auto content-center flex flex-col items-center"}>
                <h1 className={"text-6xl text-sky-600"}>Search Movies</h1>
                <div className={"flex justify-center m-8"}>
                    <SearchBar placeholder={"Search Movies ..."}/>
                </div>
            </div>
            {children}
        </div>
    );
};

export default Layout;