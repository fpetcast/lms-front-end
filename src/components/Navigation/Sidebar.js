import { sidebarMenu } from "../../utils/enum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faGraduationCap , faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useState } from "react";

function Sidebar() {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const menu = sidebarMenu.map((item) => 
        <li className="menu-item text-lg font-semibold cursor-pointer" key={item.label}>
            <a className="flex items-center gap-5 px-3 py-3 rounded-lg text-zinc-300 hover:text-white hover:bg-blue-500" href={item.route}>
                <FontAwesomeIcon icon={faUser} />
                <span>{item.label}</span>
            </a>
        </li>
    )

    if(!isCollapsed) {
        return (
            <aside className={`sidebar flex top-0 left-0 z-40 flex-col w-3/12 bg-palette2-grey-dark rounded-r-xl transition-all duration-500 ease-in-out ${!isCollapsed ? "translate-x-0" : "-translate-x-full opacity-0"}`}>
                <div className="app-logo flex text-blue-400 items-center text-4xl gap-2 px-5 mt-10 mb-4">
                    <FontAwesomeIcon icon={faGraduationCap} />
                    <span className="logo-text">LMS</span>
                </div>

                <div className="self-end px-5">
                    <button className="flex justify-center items-center border-2 border-zinc-300 text-zinc-300 hover:text-white hover:border-white w-8 h-8 px-2 py-2 rounded-full" onClick={() => setIsCollapsed(!isCollapsed)}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </button>
                </div>

                <ul className="menu-list h-3/6 gap-4 w-full flex flex-col justify-start pt-5 px-5">
                    {menu}
                </ul>

                <div className="">

                </div>
            </aside>
        )
    }else {
        return(
            <button className="absolute top-10 left-5 flex justify-center items-center border-2 border-black w-8 h-8 px-2 py-2 rounded-full" onClick={() => setIsCollapsed(!isCollapsed)}>
                        <FontAwesomeIcon icon={faChevronRight} />
            </button>
        )
    }
}

export default Sidebar;