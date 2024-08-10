import Link from "next/link";
import React from "react";
import ToggleMode from "./ToggleMode";
import AvatarComponent from "@/components/AvatarComponent";
import NavComponent from "@/components/nav/NavComponent";

const HeaderComponent = () => {
    return (
        <nav className="flex fixed w-full flex-col items-center border-b mb-5 py-5 bg-secondary ">
          <Link  href={'/'}>The Movies Data Base</Link>
            <div className="flex justify-between max-w-6xl w-full">
                <div className="flex items-center gap-5">
                    <NavComponent  path={'/'}>Home</NavComponent>
                    <NavComponent  path={'/movies'}>Movies</NavComponent>
                    <NavComponent  path={'/genres'}>Genres</NavComponent>
                </div>
                <div className="flex items-center gap-5">
                    <Link href={'/'}>Sign out</Link>
                    <Link href="/">
                        <AvatarComponent/>
                    </Link>
                    <ToggleMode />
                </div>
            </div>
        </nav>
    );
};

export default HeaderComponent;