import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React from 'react';

const AvatarComponent = () => {
    return (
        <div>
            <Avatar>
                <AvatarImage src="3d-cartoon-style-character.jpg" />
                <AvatarFallback>YM</AvatarFallback>
            </Avatar>
        </div>
    );
};

export default AvatarComponent;
