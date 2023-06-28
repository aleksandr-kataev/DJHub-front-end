import { useEffect, useState } from "react"
import crossFaderTrackSVG from "../../../assets/crossFaderTrack.svg"
import crossFaderSliderSVG from "../../../assets/crossFaderSlider.svg"
import useControlEvent, { CallbackFunction } from "../../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../../utils/utils"

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
            <img
                className="absolute cursor-pointer"
                draggable="false"
                src={crossFaderSliderSVG}
                onMouseDown={onMouseDown}
                style={{ left: `${sliderPos}%`, transform: `translateY(-10px) translateX(-12px)`}}
            />
            <img draggable="false" src={crossFaderTrackSVG} />
        </div>
    )
}

export default Crossfader
