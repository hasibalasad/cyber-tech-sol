

function Sidebar() {
    return (
        <div className="w-1/5 bg-[#9398bf] h-screen">
            <h2 className=" pl-5 pt-3 font-semibold">Sidebar</h2>
            <div >
                <select className="w-[90%] mx-2 mt-3 mb-1" name="item1" id="item1">
                    <option value="Item 1">Item 1</option>
                </select>

                <div className=" flex flex-col mb-1">
                    <label className="bg-[#b8b5b5] mb-1 w-[70%] ml-[22.5%] text-center" htmlFor="">Item A</label>
                    <label className="bg-[#b8b5b5] w-[70%] ml-[22.5%] text-center" htmlFor="">Item B</label>
                </div>

                <select className="w-[90%] mx-2 mb-1" name="item1" id="item1">
                    <option value="Item 2">Item 2</option>
                </select>

                <select className="w-[90%] mx-2 mb-1" name="item1" id="item1">
                    <option value="Item 3">Item 3</option>
                </select>
            </div>
        </div>
    )
}

export default Sidebar