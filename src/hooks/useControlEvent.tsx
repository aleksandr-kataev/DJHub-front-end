import { useState } from "react";

type CallbackFunction = (event: MouseEvent, startingY: number) => void

function useControlEvent(callback: CallbackFunction) {
    const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        let startingY = event.clientY
        const onMouseMove = (event: MouseEvent) => {
            callback(event, startingY);
        };
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    return handleMouseDown
}

export default useControlEvent