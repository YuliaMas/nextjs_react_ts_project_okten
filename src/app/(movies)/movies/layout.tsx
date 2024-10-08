import {Metadata} from "next";
import React from "react";

export const metadata: Metadata = {
    title: 'MoviesLayout metadata'
};

type Props = {children: React.ReactNode};
const MoviesLayout = ({children}: Props) => {
    return (
        <div className={"w-full mx-auto content-center flex flex-col items-center"}>
            <main>
                {children}
            </main>
        </div>
    )
};
export default MoviesLayout;