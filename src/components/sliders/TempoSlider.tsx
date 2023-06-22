import { useEffect, useRef, useState } from "react"
import sliderSVG from "../../assets/slider.svg"
import useControlEvent from "../../hooks/useControlEvent"
import { calValOnMouseMove } from "../../utils/utils"

//props for this slider, use useMemo
//sensitivity
//vertical/horizontal
//size of the thumb
//size of the track

const TempoSlider: React.FC = () => {
    const [value, setValue] = useState(0.5)
    const [sliderPos, setSliderPos] = useState(0)
    const sliderTrackRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        setSliderPos(calculateSliderPos(value))
    }, [value])

    const calculateSliderPos = (sliderVal: number) => {
        return 100 - sliderVal * 100
    }

    const handleChangeOnMouseMove = (event: MouseEvent, startingY: number): void => {
        setValue(calValOnMouseMove(value, startingY, event.clientY, 1))
    }

    const onMouseDown = useControlEvent(handleChangeOnMouseMove)

    return (
        <div className="text-white">
            <div className="bg-secondary-black p-1 text-center rounded-sm">{value}</div>
            <div className="bg-secondary-black p-1 px-2 mt-2 py-4 rounded-sm">
                <div className="relative">
                    <div
                        onMouseDown={onMouseDown}
                        className={`absolute opacity-50 bg-orange-400 cursor-pointer h-4 w-11 -translate-y-2`}
                        style={{ top: `${sliderPos}%` }}
                    ></div>
                    <img draggable="false" ref={sliderTrackRef} src={sliderSVG} />
                </div>
            </div>
        </div>
    )
}

export default TempoSlider
