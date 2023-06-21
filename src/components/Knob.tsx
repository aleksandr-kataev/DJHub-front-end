import React, { useRef, useState } from 'react'
import useControlEvent from '../hooks/useControlEvent';
import { calValOnMouseMove } from '../utils/utils';

type Size = "S" | "M" | "L"

interface KnobProps {
    size: Size
}

const S_SIZE = 6
const M_SIZE = 8
const L_SIZE = 10
//sensitivity based on size?

const Knob: React.FC<KnobProps> = (props: KnobProps) => {
    const [value, setValue] = useState(0.5);
    const knobRef = useRef<HTMLDivElement>(null);

    const handleChangeOnMouseMove = (event: MouseEvent, startingY: number): void => {
        setValue(calValOnMouseMove(value, startingY, event.clientY, 2))
    }
    const handleMouseDown = useControlEvent(handleChangeOnMouseMove)

    return (
        <div ref={knobRef} className={`${props.size === "S" ? `w-${S_SIZE} h-${S_SIZE}` : props.size === "M" ? `w-${M_SIZE} h-${M_SIZE}` : `w-${L_SIZE} h-${L_SIZE}`}
            relative rounded-full bg-gray-200 cursor-pointer`} onMouseDown={handleMouseDown}>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-gray-700">{value}</span>
        </div>
    )
}

export default Knob