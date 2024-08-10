'use client';

import React, {FC} from 'react';
import {usePathname} from "next/navigation";
import Link from "next/link";
import "./nav.css";

type IProps = {
    path: string,
    children: React.ReactNode,
}
const NavComponent: FC<IProps> = ({path, children}) => {
    let pathName = usePathname();
    return (
        <div>
            <Link href={path} className={pathName === path ? "active" : ""}>
                {children}
            </Link>
        </div>
    );
};

export default NavComponent;