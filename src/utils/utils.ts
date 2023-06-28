// Returns value from 0 to 1 in a range
export function calValOnMouseMove(prevVal: number, initVal: number, currentVal: number, sensitivity?: number) {
    const increment = sensitivity || 1
    const delta = -(currentVal - initVal)
    let newValue = delta * increment
    newValue = newValue / 200
    return Math.max(0, Math.min(1, Number((prevVal + newValue).toFixed(2))))
}

// Returns value from 0 to 1, if value goes above 1 it goes back to 0 like a clock
export function calValOnMouseMoveNoRange(prevVal: number, initVal: number, currentVal: number, sensitivity?: number) {
    const increment = sensitivity || 1
    const delta = -(currentVal - initVal)
    const newValue = (delta * increment) / 200
    const result = (prevVal + newValue) % 1
    return result < 0 ? 1 + result : result
}
