import React from "react";
import ToggleMode from "./ToggleMode";
import NavComponent from "@/components/nav/NavComponent";
import AuthComponent from "@/components/AuthComponent";
import LogoComponent from "@/components/LogoComponent";

const HeaderComponent = () => {
    return (
        <nav className="flex w-full flex-col items-center border-b mb-5 py-5 bg-secondary fixed">
            <div className="flex justify-between max-w-6xl w-full sticky">
               <LogoComponent/>
                <div className="flex items-center gap-5">
                    <NavComponent path={'/'}>Home</NavComponent>
                    <NavComponent path={'/movies'}>Movies</NavComponent>
                    <NavComponent path={'/genres'}>Genres</NavComponent>
                    <NavComponent path={'/search'}>Search</NavComponent>
                </div>
                <div className="flex items-center gap-5">
                    <AuthComponent/>
                    <ToggleMode/>
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;