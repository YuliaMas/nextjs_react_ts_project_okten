import React from 'react';
import Link from "next/link";
import AvatarComponent from "@/components/AvatarComponent";
import {authService} from "@/services/api.service";

const AuthComponent = async () => {
    let status = await authService.getUser();
    if(status.success) console.log('true');
    return (
        // <ul className={"p-28"}>
        //     <li>{status.success ? "false" : "true"}</li>
        //     <li>{status.status_code}</li>
        //     <li>{status.status_message}</li>
        // </ul>
    <>
        {status.success ?
            (<>
                <Link href={'/movies'}>Sign out</Link>
                <Link href="/"><AvatarComponent/></Link>
            </>)
                :(<>
                    <Link href={'/'}>Sign in</Link>
                    <div className={"w-8 h-8 bg-gray-400 rounded-full border-2 text-black text-center font-bold"}>?</div>
                </>)
            }
        </>
    );
};

export default AuthComponent;