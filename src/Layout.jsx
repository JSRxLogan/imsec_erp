import { Header, Footer, SideBar } from "./components/index.js"
import { Outlet } from "react-router-dom"
import { useSelector } from "react-redux"

function Layout() {

    const isExpanded = useSelector((state) => state.expand.status);

    return (
        <>
            <Header />
            <div className="flex min-h-full">
                <SideBar />
            {isExpanded && (
                <div className="flex-1 hidden p-4">
                    <Outlet />
                </div>
            )}
            {!isExpanded && (
                <div className="flex-1 p-4">
                    <Outlet />
                </div>
            )}
            </div>
            <Footer />
        </>
    )
}

export default Layout
