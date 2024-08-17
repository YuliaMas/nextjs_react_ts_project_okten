'use client';
import React, {useEffect} from 'react';
import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css'
import {videoService} from "@/services/api.service";
import Image from "next/image"

const VideoComponent = async(id) => {
    let res = await videoService.getAllTrailers(id);
        console.log(res);
    return (
        <div>
                    <LiteYouTubeEmbed
                        id={res[0].key}
                        title={res[0].name}
                    />
        </div>
    );
};

export default VideoComponent;