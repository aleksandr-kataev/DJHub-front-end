export function calcValueOnMouseMove(mouseY: number, top: number, bottom: number, sensitivity?: number) {
    const newValue = (-(((mouseY - (bottom - top) - top) / (bottom - top)) * 2) - 1) * (sensitivity || 1)
    // Get in range -1 to 1 and round to 3 
    return Number(Math.max(-1, Math.min(1, newValue)).toFixed(3))
}