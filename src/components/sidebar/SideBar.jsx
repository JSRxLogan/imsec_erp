import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  collapse, expand as Expand } from '../../store/slices';
import { collapse as Collapse } from '../../store/slices';
import { useDispatch } from 'react-redux';
import {
  Home,
  Calendar,
  BookOpen,
  ClipboardList,
  Settings,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const SideBar = ({ openSideBar }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    
    // Get mobile sidebar state from Redux store
    const isMobileExpanded = useSelector((state) => state.expand.status);

    const dispatch = useDispatch();

    console.log("Mobile Sidebar State from Redux:", isMobileExpanded);

    // Check if mobile view
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Sync with parent control for desktop
    useEffect(() => {
        if (!isMobile) {
            setIsExpanded(openSideBar);
        }
    }, [openSideBar, isMobile]);

    const toggleSidebar = () => {
        if (!isMobile) {
            setIsExpanded(!isExpanded);
            setActiveDropdown(null);
        }
    };

    const toggleDropdown = (index) => {
        if (activeDropdown === index) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(index);
        }
    };

    // Sidebar options with dropdowns
    const sidebarOptions = [
        { icon: Home, label: "Dashboard", path: "/" },
        { icon: Calendar, label: "All TimeTable", path: "/timetable/sections" },
        { icon: BookOpen, label: "My TimeTable", path: "/timetable/my" },
        { icon: ClipboardList, label: "Bunk List", path: "/timetable/bunklist" },
        { icon: Settings, label: "Edit TimeTable", path: "/timetable/edit" },
    ];

    return (
        <>
            {/* Desktop Sidebar */}
            <div className={`hidden md:flex flex-col bg-white border-r border-gray-200 h-screen relative transition-all duration-300 ease-in-out z-30 ${isExpanded ? 'w-64' : 'w-16 '}`}>

                {/* Toggle Button */}
                <div 
                className="flex justify-end p-4 pb-0"
                onClick={toggleSidebar}
                >
                    <button
                        onClick={toggleSidebar}
                        className="p-1 rounded-full hover:bg-gray-100 text-[#253973]"
                    >
                        {isExpanded ? <ChevronLeft size={30} /> : <ChevronRight size={30} />}
                    </button>
                </div>

                {/* Navigation Options */}
                <nav className={`flex-1 mt-4 scrollbar scrollbar-thin ${isExpanded ? 'overflow-y-auto' : 'overflow-y-hidden'}`}>
                    {sidebarOptions.map((option, index) => (
                        <NavLink
                        key={index}
                        to={option.path}
                        className={({ isActive }) =>
                            `flex items-center p-3 mx-2 rounded-lg transition-colors ${
                            isExpanded ? "justify-start" : "justify-center"
                            } ${
                            isActive
                                ? "text-blue-600 font-semibold bg-gray-200"
                                : "text-[#555] hover:bg-gray-100"
                            }`
                        }
                        >
                        <option.icon size={20} className="text-[#253973]" />
                        {isExpanded && <span className="ml-3">{option.label}</span>}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobile && isMobileExpanded && (
                <>

                    <div className="h-screen w-full bg-white z-30 transform transition-transform duration-300 ease-in-out md:hidden">
                        <div 
                        className="p-4 border-b border-gray-200 flex justify-between items-center"
                        onClick={() => {dispatch(Collapse())/* Dispatch action to close sidebar */}}
                        >
                            <h2 className="text-xl font-semibold text-[#253973]">IMSEC ERP</h2>
                            <button 
                                onClick={() => {dispatch(Collapse())/* Dispatch action to close sidebar */}}
                                className="p-1 rounded-full hover:bg-gray-100 text-[#253973]"
                            >
                                <ChevronLeft size={30} />
                            </button>
                        </div>

                        <nav className="mt-4 h-[calc(100%-4rem)] overflow-y-auto">
                            {sidebarOptions.map((option, index) => (
                                <NavLink
                                    key={index}
                                    to={option.path}
                                    className={({ isActive }) =>
                                    `flex items-center p-3 mx-2 rounded-lg transition-colors ${
                                        isActive
                                        ? "text-blue-600 font-semibold bg-gray-200"
                                        : "text-[#555] hover:bg-gray-100"
                                    }`
                                    }
                                    onClick={() => dispatch(Collapse())} // close after click
                                >
                                    <option.icon size={20} className="text-[#253973]" />
                                    <span className="ml-3">{option.label}</span>
                                </NavLink>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default SideBar;