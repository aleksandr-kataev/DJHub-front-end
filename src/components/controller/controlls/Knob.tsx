import React, { useState } from "react"
import useControlEvent, { CallbackFunction } from "../../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../../utils/utils"
import knobSVG from "../../../assets/knob.svg"

type Size = "S" | "M" | "L"

interface KnobProps {
    size: Size
}

const Knob: React.FC<KnobProps> = (props: KnobProps) => {
    const [value, setValue] = useState(0.5)

    const sizes = {
        S: "w-6 h-6",
        M: "w-8 h-8",
        L: "w-10 h-10",
    }

    const handleOnMouseMove: CallbackFunction = (event: MouseEvent, startingY: number): void => {
        setValue(calValOnMouseMove(value, startingY, event.clientY, 2))
    }
    const onMouseDown = useControlEvent(handleOnMouseMove, "Y")

    const calculateKnobAngle = (value: number) => {
        return value * 270 - 135
    }

    return (
        <div
            className={`${sizes[props.size]} relative rounded-full bg-gray-200 cursor-pointer`}
            onMouseDown={onMouseDown}
        >
            <img
                draggable={false}
                src={knobSVG}
                onMouseDown={onMouseDown}
                alt="SVG"
                style={{
                    transform: `rotate(${calculateKnobAngle(value)}deg)`,
                    width: "100%",
                    height: "100%",
                }}
            />
        </div>
    )
}

export default Knob
