'use client';
import React, {useState} from 'react';
import {FaSearch} from 'react-icons/fa';
import {useSearchParams, useRouter, usePathname} from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

const SearchBar = ({ placeholder }: { placeholder: string }) => {
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const {replace} = useRouter();
    const handleSearch = useDebouncedCallback((word: string) => {
        console.log(`Searching... ${word}`);
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        console.log(word);
        if (word) {
            params.set('query', word )
        } else {
            params.delete('query');
        }
        replace(`${pathname}?${params.toString()}`);
    }, 300);
    return (
        <form className={"w-[600px] relative"}>
            <label htmlFor="search" className={"sr-only"}> Search </label>
            <div className={"relative"}>
                <input type="search"
                       className={"w-full p-4 rounded-full bg-slate-800"}
                       placeholder={placeholder}
                       onChange={(e) => {
                           handleSearch(e.target.value);
                       }}
                       defaultValue={searchParams.get('query')?.toString()}
                />
                <button className={"absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-900"}>
                    <FaSearch/>
                </button>
            </div>
        </form>
    );
};

export default SearchBar;
