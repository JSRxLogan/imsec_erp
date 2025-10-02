import { useState, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Expand, Collapse } from '../index';
import { LogOut, ChevronDown, Menu } from 'lucide-react';

const Header = () => {
    const isExpanded = useSelector((state) => state.expand.status);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const studentId = "A2023CSE9101";

    const dispatch = useDispatch();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isExpanded]);

    const handleDropdownToggle = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    function handleMenuToggle() {
        console.log("Menu button clicked. Current isExpanded:", isExpanded);

        if (isExpanded) {
            dispatch(Collapse());
        }

        else {
            dispatch(Expand());
        }
    }

    return (
        <header className="w-full bg-[#253973] px-6 py-3">
            <div className="flex items-center justify-between">
                {/* Left side - Logo and Text */}
                <div className="flex items-center space-x-3">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVpZ9G7FdsmKfeiw_UCNqIsFrJXVvXpkyl4Q&s"
                        alt="College Logo"
                        className="h-[40px] w-[40px] object-contain hidden md:block"
                    />
                    <h1 className="text-[50px] font-bold text-[#f1f1f1] leading-none hidden md:block font-['Roboto_Slab']"
                    >
                        IMSEC
                    </h1>
                    <button
                        onClick={handleMenuToggle}
                        className={`md:hidden p-1 rounded-md text-[#f1f1f1] ${isExpanded ? 'bg-[#1a2a5a] text[fffff]' : 'bg-[#253973]'}`}
                    >
                        <Menu size={32} />
                    </button>

                </div>

                {/* Right side - Dropdown */}
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={handleDropdownToggle}
                        className={`
                                   font-bold px-2 py-2 rounded-md transition-colors
                                   bg-[#253973] text-[#f1f1f1]
                                   active:bg-[#1a2a59] 
                                   ${isDropdownOpen ? 'bg-[#1a2a5a] text[fffff]' : 'bg-[#253973]'} 
                                   btn-hover
                                 `}
                    >
                        {studentId}
                        <ChevronDown className="inline-block h-4 w-4 ml-1 font-bold" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 top-full mt-1 w-48 bg-[#ffc839] rounded-md shadow-lg z-[60]">
                            <div className="py-1">
                                <button className="w-full text-left px-4 py-2 text-[#253973] hover:bg-[#e6b432] transition-colors border-b-2 border-gray-400">
                                    Change Password
                                </button>
                                <button className="w-full text-left px-4 py-2 text-[#253973] hover:bg-[#e6b432] transition-colors flex items-center">
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Logout
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;