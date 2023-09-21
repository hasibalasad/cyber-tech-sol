import { useState } from "react"

function Navbar() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const closeNavbar = () => {
        setIsOpen(false);
    };

    return (
        <div>
            {isOpen && (<div>
                <ul className="flex bg-black text-white h-16 items-center justify-evenly pl-80 pr-80">
                    <li className="text-blue-800"><a href="#" >Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>)}
        </div>
    )
}

export default Navbar
