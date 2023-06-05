import React from "react";
import './Base.css';
import { useHistory } from 'react-router-dom'

function SideBar(){

    const history=useHistory();

    return (
        <div className="sidebar col-2 text-left">
           

            


            {/* Dashboard option */}
            <div className="group" onClick={()=>history.push("/")}>
            <i class="fa fa-tachometer fa-2x" aria-hidden="true"></i>
            <span>DashBoard</span>  
            </div>


            {/* Student profile */}
            <div className="group" onClick={()=>history.push("/student")}>
            <i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i>
            <span>Students Profiles</span>  
            </div>

           
            {/* Teacher Profile*/}
            <div className="group" onClick={()=>history.push("/teacher")}>
            <i class="fa fa-user-o fa-2x" aria-hidden="true"></i>
            <span>Teacher Profiles</span>  
            </div>
           
        </div>
    );

}


export default SideBar