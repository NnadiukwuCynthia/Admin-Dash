import {FaLocationDot} from "react-icons/fa6";
import {FaClipboardList} from "react-icons/fa";
import {LuAlarmCheck} from 'react-icons/lu'
const Reg = () => {
  return (
    <>
    <section className="regSection">
        <div className='eachReg'>
            <div className="fDiv">
                <div className='icon-div'>
                    <FaLocationDot className='regIcon icon1'/>
                </div>
                <div>
                    <h4 className='regNo one'>20</h4>
                    <p className='regDetail'>No. of Sites</p>
                </div>
            </div>
            <div className='regComp-Div'>
                <p className='regComp'>20 Companies</p>
            </div>
        </div>
        <div className='eachReg'>
            <div className="fDiv">
                <div className='icon-div'>
                    <FaClipboardList className='regIcon icon2'/>
                </div>
                <div>
                    <h4 className='regNo two'>900</h4>
                    <p className='regDetail'>Asset in Stock</p>
                </div>
            </div>
            <div className='regComp-Div same'>
                <p className='regComp'>50 Companies</p>
            </div>
        </div>
        <div className='eachReg'>
            <div className="fDiv">
                <div className='icon-div'>
                    <LuAlarmCheck className='regIcon icon3'/>
                </div>
                <div>
                    <h4 className='regNo three'>10</h4>
                    <p className='regDetail'>Open Incidents</p>
                </div>
            </div>
            <div className='regComp-Div same-one'>
                <p className='regComp'>20 Current Incidents</p>
            </div>
        </div>
    </section>
    </>
  )
}

export default Reg