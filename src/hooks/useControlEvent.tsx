type CallbackFunction = (event: MouseEvent, startingY: number) => void

/**
 * Hook used to handle mouse events when using deck controlls
 * @param callback function to execute on mouseMove
 * @returns function to attach to deck control
 */
function useControlEvent(callback: CallbackFunction) {
    const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        let startingY = event.clientY
        const onMouseMove = (event: MouseEvent) => {
            callback(event, startingY)
        }
        const onMouseUp = () => {
            document.removeEventListener("mousemove", onMouseMove)
            document.removeEventListener("mouseup", onMouseUp)
        }
        document.addEventListener("mousemove", onMouseMove)
        document.addEventListener("mouseup", onMouseUp)
    }
    return handleMouseDown
}

export default useControlEvent
