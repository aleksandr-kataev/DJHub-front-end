import Knob from "./Knob"
import Crossfader from "./sliders/Crossfader"
import Fader from "./sliders/Fader"

const Mixer: React.FC = () => {
    return (
        <div className="my-2">
            <div className="grid grid-cols-custom">
                <div className="grid grid-cols-1 place-items-center">
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="L" />
                    <button>head</button>
                </div>
                <div>
                    <div className="flex justify-around">
                        <div className="grid grid-cols-1 place-items-center">
                            <Knob size="S" />
                            <div className="mt-4">
                                <Fader />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 place-items-center">
                            <Knob size="S" />
                            <div className="mt-4">
                                <Fader />
                            </div>
                        </div>
                    </div>
                    <div className="mt-7">
                        <Crossfader />
                    </div>
                </div>
                <div className="grid grid-cols-1 place-items-center">
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="L" />
                    <button>head</button>
                </div>
            </div>
        </div>
    )
}

export default Mixer
