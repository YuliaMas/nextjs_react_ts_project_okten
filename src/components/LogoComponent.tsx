import React from 'react';
import Link from "next/link";
import Image from "next/image";

const LogoComponent = () => {
    return (
        <div className={"md:flex items-center gap-2 hidden md:visible"}>
            <h2 className={"font-bold w-full text-end  text-sky-800 h-6"}> MOVIES </h2>
            <Link href={'/'} alt={"YM"}>
                <Image
                    className="block rounded-3xl m-22 h-12"
                    src="/LogoDog.png"
                    alt="MovieApp Logo"
                    width={140}
                    height={60}
                    priority
                />
            </Link>
            <h2 className={"font-bold w-full text-start size-2 text-sky-800 h-6"}> APP </h2>
        </div>
    );
};
export default LogoComponent;