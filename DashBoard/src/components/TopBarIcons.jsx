import { BiUser } from "react-icons/bi"
import {  IoMdNotificationsOutline} from "react-icons/io";


const TopBarIcons = () => {

  return (
    <>
    <div className="iconCont">
    <BiUser className="Icons"/><span><p className="adminProfile">Admin Profile</p></span>
        <IoMdNotificationsOutline className="Icons"/>
    </div>
    </>
  )
}

export default TopBarIcons