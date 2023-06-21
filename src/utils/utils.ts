export function calValOnMouseMove(prevVal: number, startingY: number, currentY: number, sensitivity?: number) {
    const increment = sensitivity || 1;
    const deltaY = -(currentY - startingY)
    let newValue = ((deltaY * increment))
    newValue = (newValue / 2) / 100
    return Math.max(0, Math.min(1, Number((prevVal + newValue).toFixed(3))))
}

export function calValOnMouseMoveNoRange(prevVal: number, startingY: number, currentY: number, sensitivity?: number) {
    const increment = sensitivity || 1;
    const deltaY = -(currentY - startingY);
    let newValue = (deltaY * increment) / 200;
    const result = (prevVal + newValue) % 1;
    return result < 0 ? 1 + result : result
}