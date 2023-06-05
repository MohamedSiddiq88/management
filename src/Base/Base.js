import React from "react"
import './Base.css';
import SideBar from "./SideBar";
import { useHistory } from 'react-router-dom'



function Base({ title, heading, children }) {

    const history=useHistory();


    return (

        // container
        <div className="container-fluid base">


            <div className="row">

                <div className="col-2 left-col">
                    <SideBar></SideBar>
                </div>



                <div className="col-10 page col">
                    {/* header */}
                    <header className="header">
                        {/* nav */}
                    </header>


                    {/* main-content */}
                    <main className="main-content">
                    <h1 className="heading"><b>{heading}</b></h1>
                        <div className="main-page">
                            {children}
                        </div>
                    </main>

                </div>{/* col*/}
            </div>{/* row*/}
        </div>//base
    );

}



export default Base