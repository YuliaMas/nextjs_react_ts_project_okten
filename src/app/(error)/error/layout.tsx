import React from "react";

type Props = {children: React.ReactNode};
const ErrorLayout =  ({children}: Props) => {
    return (
        <div className={"w-full mx-auto content-center flex flex-col items-center mt-20"}>
            <main className={"max-h-screen min-h-screen"}>
                {children}
            </main>
        </div>
    );
};

export default ErrorLayout;