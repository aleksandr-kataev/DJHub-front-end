import Deck from "./Deck"
import Mixer from "./Mixer"
import SongInfo from "./SongInfo"
import TempoSlider from "./sliders/TempoSlider"

function Controller() {
    return (
        <div className="bg-primary-black p-2 flex justify-around select-none">
            <div className="bg-secondary-black py-2 px-6 rounded">
                <div className="py-4">
                    <SongInfo title={"ABR - (Monty Remix)"} artist="Cesco" />
                </div>
                <div className="grid grid-cols-3 gap-6 my-4 mt-7 text-white">
                    <button className="bg-purple py-4 px-10">A</button>
                    <button className="bg-purple py-4 px-10">B</button>
                    <button className="bg-purple py-4 px-10">C</button>
                    <button className="bg-purple py-4 px-10">D</button>
                    <button className="bg-purple py-4 px-10">E</button>
                    <button className="bg-purple py-4 px-10">F</button>
                </div>
            </div>
            <TempoSlider />
            <div className="bg-secondary-black text-white">
                <Deck />
            </div>
            <div className="bg-secondary-black text-white">
                <Mixer />
            </div>
            <div className="bg-secondary-black text-white">
                <Deck />
            </div>
            <TempoSlider />
            <div className="bg-secondary-black py-2 px-6 rounded">
                <div className="py-4">
                    <SongInfo title={"ABR - (Monty Remix)"} artist="Cesco" />
                </div>
                <div className="grid grid-cols-3 gap-6 my-4 mt-7 text-white">
                    <button className="bg-purple py-4 px-10">A</button>
                    <button className="bg-purple py-4 px-10">B</button>
                    <button className="bg-purple py-4 px-10">C</button>
                    <button className="bg-purple py-4 px-10">D</button>
                    <button className="bg-purple py-4 px-10">E</button>
                    <button className="bg-purple py-4 px-10">F</button>
                </div>
            </div>
        </div>
    )
}

export default Controller
