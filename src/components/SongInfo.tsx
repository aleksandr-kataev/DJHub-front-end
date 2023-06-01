import React, { useState } from 'react'


interface SongInfoProps {
    title: string
    artist: string
}


const SongInfo: React.FC<SongInfoProps> = (props: SongInfoProps) => {
    return (
        <div className='text-white'>
            <div className='text-xl'><span>{props.title}</span></div>
            <div className='text-sm mt-2'><span>{props.artist}</span></div>
        </div>
    )
}

export default SongInfo