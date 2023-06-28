import headphonesSVG from "../../assets/headphones.svg"
import Crossfader from "./controlls/Crossfader"
import Knob from "./controlls/Knob"
import VolumeFader from "./controlls/VolumeFader"

const Mixer: React.FC = () => {
    return (
        <div className="my-2">
            <div className="grid grid-cols-custom">
                <div className="grid grid-cols-1 place-items-center">
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="M" />
                    <Knob size="L" />
                    <button className="bg-primary-grey h-4 w-7 grid grid-cols-1 place-items-center mt-3">
                        <img draggable="false" src={headphonesSVG} />
                    </button>
                </div>
                <div>
                    <div className="flex justify-around">
                        <div className="grid grid-cols-1 place-items-center">
                            <Knob size="S" />
                            <div className="mt-4">
                                <VolumeFader />
                            </div>
                        </div>
                        <div className="grid grid-cols-1 place-items-center">
                            <Knob size="S" />
                            <div className="mt-4">
                                <VolumeFader />
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
                    <button className="bg-primary-grey h-4 w-7 grid grid-cols-1 place-items-center mt-3">
                        <img draggable="false" src={headphonesSVG} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Mixer
