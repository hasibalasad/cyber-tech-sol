import Main from "./components/main"
import Navbar from "./components/navbar"
import Sidebar from "./components/sidebar"


function App() {

    return (
        <>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Main />
            </div>
        </>
    )
}

export default App
