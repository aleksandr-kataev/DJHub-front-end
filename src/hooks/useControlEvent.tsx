export type CallbackFunction = (event: MouseEvent, initVal: number) => void
export type Axis = "X" | "Y"

/**
 * Hook used to handle mouse events when using deck controlls
 * @param callback function to execute on mouseMove
 * @returns function to attach to deck control
 */
function useControlEvent(callback: CallbackFunction, axis: Axis) {
    const handleMouseDown = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault()
        let initVal = axis === "X" ? event.clientX : event.clientY
        const onMouseMove = (event: MouseEvent) => {
            callback(event, initVal)
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
