import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import React from 'react';

const AvatarComponent = () => {
    return (
        <div>
            <Avatar>
                <AvatarImage src="3d-cartoon-style-character.jpg" alt={"YM"}/>
                <AvatarFallback>YM</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default AvatarComponent;
