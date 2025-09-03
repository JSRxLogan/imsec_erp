import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import {  collapse, expand as Expand } from '../../store/slices';
import { collapse as Collapse } from '../../store/slices';
import { useDispatch } from 'react-redux';
import {
    Home,
    Users,
    Settings,
    BookOpen,
    BarChart3,
    Calendar,
    FileText,
    Mail,
    HelpCircle,
    Download,
    Upload,
    ChevronDown,
    ChevronRight,
    ChevronLeft,
    CreditCard,
    Library,
    ClipboardList,
    Building,
    UserCheck,
    Car,
    Heart,
    DollarSign,
    Bell,
    Database
} from 'lucide-react';

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
        { icon: Home, label: "Dashboard", dropdown: null },
        { icon: Users, label: "Students", dropdown: ["All Students", "New Admissions", "Attendance"] },
        { icon: BookOpen, label: "Academics", dropdown: ["Courses", "Timetable", "Exams"] },
        { icon: BarChart3, label: "Results", dropdown: ["Publish Results", "Gradebook", "Reports"] },
        { icon: Calendar, label: "Calendar", dropdown: null },
        { icon: FileText, label: "Documents", dropdown: ["Upload", "Templates", "Archives"] },
        { icon: Mail, label: "Messaging", dropdown: ["Compose", "Inbox", "Sent"] },
        { icon: Settings, label: "Settings", dropdown: ["Profile", "Account", "Preferences"] },
        { icon: HelpCircle, label: "Help", dropdown: ["FAQ", "Support", "Resources"] },
        { icon: Download, label: "Import", dropdown: null },
        { icon: Upload, label: "Export", dropdown: null },
        { icon: Users, label: "Faculty", dropdown: ["Manage", "Schedules", "Performance"] },
        { icon: CreditCard, label: "Fees", dropdown: ["Collect Fees", "Fee Structure", "Outstanding"] },
        { icon: Library, label: "Library", dropdown: ["Books", "Issue History", "Returns"] },
        { icon: ClipboardList, label: "Attendance", dropdown: ["Daily Log", "Reports", "Regularity"] },
        { icon: Building, label: "Departments", dropdown: ["Computer Science", "Electrical", "Mechanical"] },
        { icon: UserCheck, label: "HR", dropdown: ["Staff", "Payroll", "Leaves"] },
        { icon: Car, label: "Transport", dropdown: ["Routes", "Vehicles", "Allocation"] },
        { icon: Heart, label: "Health", dropdown: ["Medical Records", "Appointments", "Reports"] },
        { icon: DollarSign, label: "Finance", dropdown: ["Expenses", "Budget", "Reports"] },
        { icon: Bell, label: "Notifications", dropdown: ["Alerts", "Announcements", "Settings"] },
        { icon: Database, label: "Backup", dropdown: ["Create Backup", "Restore", "History"] },
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
                        <div key={index}>
                            <div
                                className={`flex items-center p-3 mx-2 rounded-lg cursor-pointer text-[#555] hover:bg-gray-100 transition-colors ${isExpanded ? 'justify-start' : 'justify-center'}`}
                                onClick={() => option.dropdown && toggleDropdown(index)}
                            >
                                <option.icon size={20} className="text-[#253973]" />
                                {isExpanded && (
                                    <>
                                        <span className="ml-3 flex-1 ">{option.label}</span>
                                        {option.dropdown && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </>
                                )}
                            </div>

                            {/* Dropdown Menu */}
                            {isExpanded && option.dropdown && activeDropdown === index && (
                                <div className="ml-8 mr-2 mt-1 mb-2 bg-[#f3f3f3] rounded-lg overflow-hidden transition-all duration-300">
                                    {option.dropdown.map((item, subIndex) => (
                                        <div
                                            key={subIndex}
                                            className="p-2 pl-6 text-sm text-[#555] hover:bg-gray-200 cursor-pointer transition-colors"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </nav>
            </div>

            {/* Mobile Sidebar Overlay */}
            {isMobile && isMobileExpanded && (
                <>

                    <div className=" h-full w-full bg-white z-50 transform transition-transform duration-300 ease-in-out md:hidden">
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
                                <div key={index}>
                                    <div
                                        className="flex items-center p-3 mx-2 rounded-lg cursor-pointer text-[#555] hover:bg-gray-100 transition-colors"
                                        onClick={() => option.dropdown && toggleDropdown(index)}
                                    >
                                        <option.icon size={20} className="text-[#253973]" />
                                        <span className="ml-3 flex-1">{option.label}</span>
                                        {option.dropdown && (
                                            <ChevronDown
                                                size={16}
                                                className={`transition-transform ${activeDropdown === index ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </div>

                                    {/* Dropdown Menu */}
                                    {option.dropdown && activeDropdown === index && (
                                        <div className="ml-8 mr-2 mt-1 mb-2 bg-[#f3f3f3] rounded-lg overflow-hidden transition-all duration-300">
                                            {option.dropdown.map((item, subIndex) => (
                                                <div
                                                    key={subIndex}
                                                    className="p-2 pl-6 text-sm text-[#555] hover:bg-gray-200 cursor-pointer transition-colors"
                                                >
                                                    {item}
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </>
    );
};

export default SideBar;