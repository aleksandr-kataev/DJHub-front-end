import { useEffect, useRef, useState } from 'react'
import Slider from './Slider.svg'
import useControlEvent from '../../hooks/useControlEvent'
import { calcValueOnMouseMove } from '../../utils/utils'

//props for this slider, use useMemo
//sensitivity
//vertical/horizontal
//size of the thumb
//size of the track

const TempoSlider: React.FC = () => {
    const [value, setValue] = useState(0)
    const [sliderPos, setSliderPos] = useState(0)
    const sliderTrackRef = useRef<HTMLImageElement>(null)

    useEffect(() => {
        setSliderPos(calculateSliderPos(value))
    }, [value])

    const calculateSliderPos = (sliderVal: number) => {
        return 100 - (sliderVal + 1) * 50
    }

    const handleChangeOnMouseMove = (event: MouseEvent): void => {
        if (!sliderTrackRef.current) return
        const sliderTrackDim = sliderTrackRef.current.getBoundingClientRect()
        setValue(calcValueOnMouseMove(event.clientY, sliderTrackDim.top, sliderTrackDim.bottom))
    }

    const onMouseDown = useControlEvent(handleChangeOnMouseMove)

    return (
        <div className='text-white'>
            <div className='bg-secondary-black p-1 text-center rounded-sm'>{value}</div>
            <div className='bg-secondary-black p-1 px-2 mt-2 py-4 rounded-sm'>
                <div className='relative'>
                    <div onMouseDown={onMouseDown} className={`absolute bg-orange-400 cursor-pointer h-4 w-11 -translate-y-2`} style={{ top: `${sliderPos}%` }} ></div>
                    <img draggable="false" ref={sliderTrackRef} src={Slider} />
                </div>
            </div>
        </div>
    )
}

export default TempoSlider