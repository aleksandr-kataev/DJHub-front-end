import { useEffect, useState } from "react"
import volumeFaderSliderSVG from "../../../assets/volumeFaderSlider.svg"
import volumeFaderTrackSVG from "../../../assets/volumeFaderTrack.svg"
import useControlEvent from "../../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../../utils/utils"

const VolumeFader: React.FC = () => {
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
            <img
                className="absolute cursor-pointer"
                draggable="false"
                src={volumeFaderSliderSVG}
                onMouseDown={onMouseDown}
                style={{ top: `${sliderPos}%`, transform: `translateY(-9px)` }}
            />
            <img draggable="false" src={volumeFaderTrackSVG} />
        </div>
    )
}

export default VolumeFader
