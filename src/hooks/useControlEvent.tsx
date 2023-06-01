type CallbackFunction = (event: MouseEvent) => void

function useControlEvent(callback: CallbackFunction) {
    const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        const onMouseMove = (event: MouseEvent) => {
            callback(event);
        };
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    return handleMouseDown;
}

export default useControlEvent