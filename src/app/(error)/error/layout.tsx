import React from "react";

type Props = {children: React.ReactNode};
const ErrorLayout =  ({children}: Props) => {
    return (
        <div className={"w-full h-full mx-auto content-center flex flex-col items-center mt-20"}>
            <main>
                {children}
            </main>
        </div>
    );
};

export default ErrorLayout;