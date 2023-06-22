import Knob from "./Knob"

function TopBar() {
    return (
        <nav>
            <div className="bg-primary-grey flex items-center justify-between">
                <div className="ml-4">
                    <button className="bg-secondary-black text-white p-1 m-1">Upload track</button>
                    <button className="bg-secondary-black text-white p-1 m-1 ml-2">Go live</button>
                </div>
                <div className="mr-56">
                    <Knob size="M" />
                </div>
            </div>
        </nav>
    )
}

export default TopBar
