import React, { useState } from "react"
import jogSVG from "../assets/jog.svg"
import useControlEvent from "../hooks/useControlEvent"
import { calValOnMouseMoveNoRange } from "../utils/utils"

const Deck: React.FC = () => {
    const [trackPos, setTrackPos] = useState(0) //in miliseconds?
    const [jogWheelRotation, setJogWheelRotation] = useState(12.5)
    const [isPlaying, setIsPlaying] = useState(false)

    const handleChangeOnMouseMove = (event: MouseEvent, startingY: number): void => {
        setJogWheelRotation(calValOnMouseMoveNoRange(jogWheelRotation, startingY, event.clientY, 2))
    }
    const handleMouseDown = useControlEvent(handleChangeOnMouseMove)

    const calculateJogAngle = (value: number) => {
        return value * 360
    }

    return (
        <div>
            <div className="p-6 px-8">
                <img
                    draggable={false}
                    src={jogSVG}
                    onMouseDown={handleMouseDown}
                    alt="SVG"
                    style={{
                        transform: `rotate(${calculateJogAngle(jogWheelRotation)}deg)`,
                    }}
                />
            </div>
            <div className="flex justify-around mt-4 text-purple">
                <button className="bg-white px-4">
                    <svg width="15" height="15" viewBox="0 0 12 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3 7.35L0.624988 14.6679L0.624989 0.0320844L13.3 7.35Z" fill="#8968EE" />
                    </svg>
                </button>
                <button className="bg-white px-2">SYNC</button>
                <button className="bg-white px-2">CUE</button>
            </div>
        </div>
    )
}

export default Deck
