'use client';
import React, {FC} from 'react';
import {FaSearch} from 'react-icons/fa';
import {usePathname, useRouter, useSearchParams} from "next/navigation";
import {useDebouncedCallback} from "use-debounce";

type Props = {
    placeholder: string
}
const SearchBar:FC<Props> = ({ placeholder}:{placeholder: string}) => {
    const {replace} = useRouter();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const handleSearch = useDebouncedCallback((word: string) => {
            const url = new URLSearchParams(searchParams);
            url.delete('query');
            url.delete('page');
            if (word) {
                url.set('query', word );
                url.set('page', '1');
            }
            replace(`${pathname}?${url.toString()}`);
    }, 300);
    return (
        <form  className={"w-[280px] md:w-[600px] relative"}>
            <label htmlFor="search" className={"sr-only"}> Search </label>
            <div className={"relative"}>
                <input
                       className={"w-full text-xl p-4  rounded-full bg-slate-400 placeholder:italic placeholder:text-slate-400 block border border-slate-300  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm md:text-base"}
                       placeholder={placeholder}
                       type="text"
                       onChange={(e) => {
                           e.preventDefault();
                           handleSearch(e.target.value);
                       }}
                       id="search"
                       defaultValue={searchParams.get('query')?.toString()}
                />
                <div className={"pl-25 hidden md:block md:visible  md:absolute right-1 top-1/2 -translate-y-1/2 p-4 rounded-full bg-slate-500"}>
                    <FaSearch/>
                </div>
            </div>
        </form>
    );
};
export default SearchBar;
