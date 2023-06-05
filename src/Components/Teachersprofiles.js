import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom'
import { AppStates } from "../Context/AppProvider";


function Teachersprofiles() {
    const {data2,setData2,ind,setInd}=AppStates();

    const history = useHistory();

    async function deleteStudent(id) {


        const response = await fetch(`https://645899734eb3f674df7800be.mockapi.io/teachers/${id}`, {
            method: "DELETE"
        })


        const newdata=await response.json();
        console.log(data2)
        
        
        setData2(data2.filter((ele, inx) => ele.id != id))


    }

    return (
        <Base
            heading={"Teachers profiles"}
        >





            {/* container */}
            <div className="container">

                {/* add button */}
                <div className="add-btn-div button-container">
                    <button type="button" className="btn btn-primary" onClick={() => history.push("/addteacher")}>Add Teacher</button>
                    <p className="msg"><mark>Scrollable Table</mark></p>
                </div>

                {/* row */}
                <div className="row">


                    {/* col */}
                    <div className="col-12 table-col">




                        {/* Teachers content */}
                        <table className="container-fluid">
                            <tr>
                                <th>No</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Gender</th>
                                <th>Subject</th>
                                <th>Blood Group</th>
                                <th>Action</th>
                            </tr>

                            {
                                data2.map((ele, ind) => (
                                    <tr key={ind}>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.age}</td>
                                        <td>{ele.gender}</td>
                                        <td>{ele.subject}</td>
                                        <td>{ele.bloodGroup}</td>


                                        {/* buttons */}
                                        <td>
                                            <div className="button-group" style={{ display: "flex" }}>


                                                {/* Edit */}
                                                <button className="btn btn-primary" onClick={() => (history.push("/editteacher"), setInd(ind))}>Edit</button>


                                                {/* Delete */}
                                                <button className="btn btn-danger" onClick={() =>deleteStudent(data2[ind].id)}>Delete</button>



                                            </div>
                                        </td>



                                    </tr>
                                ))

                            }

                        </table>

                    </div>

                </div>


            </div>






        </Base>
    );
}





export default Teachersprofiles