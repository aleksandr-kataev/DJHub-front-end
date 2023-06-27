import { useEffect, useState } from "react"
import faderSVG from "../../assets/fader.svg"
import useControlEvent from "../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../utils/utils"

const Fader: React.FC = () => {
    const [value, setValue] = useState(0.5)
    const [sliderPos, setSliderPos] = useState(0)

    useEffect(() => {
        setSliderPos(calculateSliderPos(value))
    }, [value])

    const calculateSliderPos = (sliderVal: number) => {
        return 100 - sliderVal * 100
    }

    const handleOnMouseMove = (event: MouseEvent, startingY: number): void => {
        setValue(calValOnMouseMove(value, startingY, event.clientY, 1))
    }

    const onMouseDown = useControlEvent(handleOnMouseMove, "Y")

    return (
        <div className="relative">
            <div
                onMouseDown={onMouseDown}
                className={`absolute opacity-50 bg-orange-400 cursor-pointer h-4 w-12 -translate-y-2`}
                style={{ top: `${sliderPos}%` }}
            ></div>
            <img draggable="false" src={faderSVG} />
        </div>
    )
}

export default Fader
