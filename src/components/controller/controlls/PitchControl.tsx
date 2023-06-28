import { useEffect, useState } from "react"
import pitchControlSliderSVG from "../../../assets/pitchControlSlider.svg"
import pitchControlTrackSVG from "../../../assets/pitchControlTrack.svg"
import useControlEvent from "../../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../../utils/utils"

//props for this slider, use useMemo
//sensitivity
//vertical/horizontal
//size of the thumb
//size of the track

const PitchControl: React.FC = () => {
    const [value, setValue] = useState(0.5)
    const [sliderPos, setSliderPos] = useState(0)
    const SENSITIVITY = 0.8

    useEffect(() => {
        setSliderPos(calculateSliderPos(value))
    }, [value])

    const calculateSliderPos = (sliderVal: number) => {
        return 100 - sliderVal * 100
    }

    const handleOnMouseMove = (event: MouseEvent, initVal: number): void => {
        setValue(calValOnMouseMove(value, initVal, event.clientY, SENSITIVITY))
    }

    const onMouseDown = useControlEvent(handleOnMouseMove, "Y")

    return (
        <div className="text-white">
            <div className="bg-secondary-black p-1 text-center rounded-sm">{value}</div>
            <div className="bg-secondary-black p-1 px-2 mt-2 py-3 rounded-sm">
                <div className="relative">
                    <img
                        className="absolute cursor-pointer"
                        draggable="false"
                        src={pitchControlSliderSVG}
                        onMouseDown={onMouseDown}
                        style={{ top: `${sliderPos}%`, transform: `translateY(-12px)` }}
                    />
                    <img draggable="false" src={pitchControlTrackSVG} />
                </div>
            </div>
        </div>
    )
}

export default PitchControl
