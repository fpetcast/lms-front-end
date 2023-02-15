import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const SidebarOpenButton = ({collapsed,handleSidebar}) => {
    const isLoggedIn = useSelector((state) => state.auth.isLoggedIn)

    if(!isLoggedIn) return '';
    
    return(
        <button className={`absolute top-10 left-5 flex justify-center items-center border-2 border-black w-8 h-8 px-2 py-2 rounded-full ${collapsed ? 'z-40' : ''}`} onClick={() => handleSidebar()}>
            <FontAwesomeIcon icon={faChevronRight} />
        </button>
    )
}

export default SidebarOpenButton;