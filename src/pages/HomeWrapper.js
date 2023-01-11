import { Outlet } from "react-router-dom"
import Navbar from "../Components/Navbar/Navbar"

function HomeWrapper () {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default HomeWrapper