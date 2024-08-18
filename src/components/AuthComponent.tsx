import React from 'react';
import Link from "next/link";
import AvatarComponent from "@/components/AvatarComponent";
import {authService} from "@/services/api.service";

const AuthComponent = async () => {
    let status = await authService.getUser();
    if(status.success) console.log('true');
    return (
        <>
            {status.success ?
                (<>
                    <Link href={'/'}>Sign out</Link>
                    <Link href={"/movies"}><AvatarComponent/></Link>
                </>)
                : (<>
                    <Link href={'/'}>Sign in</Link>
                    <div className={"w-8 h-8 bg-gray-400 rounded-full border-2 text-black text-center font-bold"}>?
                    </div>
                </>)
            }
        </>
    );
};
export default AuthComponent;