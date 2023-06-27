import { useEffect, useState } from "react"
import crossfaderSVG from "../../assets/crossfader.svg"
import useControlEvent, { CallbackFunction } from "../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../utils/utils"

const Crossfader: React.FC = () => {
    const [value, setValue] = useState(0.5)
    const [sliderPos, setSliderPos] = useState(0)

    useEffect(() => {
        setSliderPos(calculateSliderPos(value))
        console.log(value)
    }, [value])

    const calculateSliderPos = (sliderVal: number) => {
        return 100 - sliderVal * 100
    }

    const handleOnMouseMove: CallbackFunction = (event: MouseEvent, initVal: number) => {
        setValue(calValOnMouseMove(value, initVal, event.clientX, 1))
    }
    const onMouseDown = useControlEvent(handleOnMouseMove, "X")

    return (
        <div className="relative">
            <div
                onMouseDown={onMouseDown}
                className={`absolute opacity-50 bg-orange-400 cursor-pointer h-12 w-4 -translate-y-2`}
                style={{ left: `${sliderPos}%` }}
            ></div>
            <img draggable="false" src={crossfaderSVG} />
        </div>
    )
}

export default Crossfader
