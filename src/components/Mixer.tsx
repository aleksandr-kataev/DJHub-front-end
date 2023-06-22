import Knob from "./Knob"
import Crossfader from "./sliders/Crossfader"
import TempoSlider from "./sliders/TempoSlider"

const Mixer: React.FC = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
                <div className="grid grid-cols-1 place-items-center">
                    <Knob size="S" />
                    <Knob size="S" />
                    <Knob size="S" />
                    <Knob size="S" />
                    <button>head</button>
                </div>
                <div>
                    <div className="flex justify-around">
                        <div>
                            <Knob size="S" />
                            <TempoSlider />
                        </div>
                        <div>
                            <Knob size="S" />
                            <TempoSlider />
                        </div>
                    </div>
                    <div>
                        <Crossfader />
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <Knob size="S" />
                    <Knob size="S" />
                    <Knob size="S" />
                    <Knob size="S" />
                    <button>head</button>
                </div>
            </div>
        </div>
    )
}

export default Mixer
