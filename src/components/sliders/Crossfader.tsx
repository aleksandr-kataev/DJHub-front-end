import crossfaderSVG from "../../assets/crossfader.svg"

const Crossfader: React.FC = () => {
    return (
        <div className="text-white">
            <img draggable="false" src={crossfaderSVG} />
        </div>
    )
}

export default Crossfader
