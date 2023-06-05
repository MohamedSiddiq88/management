import React from "react";
import Base from "../Base/Base";
import { useHistory } from 'react-router-dom';
import { AppStates } from "../Context/AppProvider";

function StudentsProfiles() {
    const { data, setData, setInd } = AppStates();
    const history = useHistory();

    async function deleteStudent(id) {
        await fetch(`https://645899734eb3f674df7800be.mockapi.io/students/${id}`, {
            method: "DELETE"
        });
        setData(data.filter((ele) => ele._id !== id));
    }

    return (
        <Base heading={"Students Profiles"}>
            <div className="container">
                {/* add button */}
                <div className="add-btn-div">
                    <button className="btn btn-primary" onClick={() => history.push("/add")}>
                        Add Student
                    </button>
                    <p className="msg">
                        <mark>Scrollable Table</mark>
                    </p>
                </div>
                <div className="row">
                    <div className="col-12 table-col">
                        {/* student content */}
                        <table className="container">
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Batch</th>
                                    <th>Qualification</th>
                                    <th>Experience</th>
                                    <th>Task Completion</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((ele, ind) => (
                                    <tr key={ele._id}>
                                        <td>{ind + 1}</td>
                                        <td>{ele.name}</td>
                                        <td>{ele.batch}</td>
                                        <td>{ele.qualification}</td>
                                        <td>{ele.experience}</td>
                                        <td>{ele.taskComplition}</td>
                                        <td>{ele.gender}</td>
                                        {/* buttons */}
                                        <td>
                                            <div className="button-group" style={{ display: "flex" }}>
                                                {/* Edit */}
                                                <button
                                                    className="btn btn-primary"
                                                    onClick={() => {
                                                        history.push(`/edit/${ele._id}`);
                                                        setInd(ind);
                                                    }}
                                                >
                                                    Edit
                                                </button>
                                                {/* Delete */}
                                                <button className="btn btn-danger" onClick={() => deleteStudent(ele._id)}>
                                                    Delete
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Base>
    );
}

export default StudentsProfiles;
