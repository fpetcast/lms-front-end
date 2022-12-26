import { sidebarMenu } from "../../utils/enum";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser , faGraduationCap } from '@fortawesome/free-solid-svg-icons'

function Sidebar() {

    const menu = sidebarMenu.map((item) => 
        <li className="menu-item text-lg font-semibold cursor-pointer" key={item.label}>
            <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-zinc-400 hover:text-white hover:bg-blue-500" href={item.route}>
                <FontAwesomeIcon icon={faUser} />
                <span>{item.label}</span>
            </a>
        </li>
    )

    return (  
    
    <aside className="sidebar flex flex-col mt-5 ml-10 w-2/12 gap-6">
        <div className="app-logo flex text-blue-500 items-center text-4xl gap-2">
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className="logo-text">LMS</span>
        </div>

        <ul className="menu-list bg-white h-3/6 gap-4 w-full flex flex-col justify-start pt-5 px-5 rounded-lg hover:shadow-md transition-shadow">
            {menu}
        </ul>

        <div className="">

        </div>
    </aside>

    );
}

export default Sidebar;