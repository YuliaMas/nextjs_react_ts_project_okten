'use client';
import React, {FC} from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'

type Props = {
    videoData:  IVideo[];
}
const VideoComponent:FC<Props> = ({videoData}) => {
    console.log(videoData);
    return (
        <>
            {
                videoData.map(data => (
                (data.type === 'Trailer' &&  (
                    <div key={data.key} className={"w-96"}>
                         <LiteYouTubeEmbed id={data.key} title={data.name}/>
                    </div>
                    )
                ))
            )}
        </>
    );
};

export default VideoComponent;