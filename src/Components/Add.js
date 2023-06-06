import React from "react";
import Base from "../Base/Base";
import "./Add.css";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import { AppStates } from "../Context/AppProvider";

// Field validation
export const fieldValidationSchema = yup.object({
  name: yup.string().required("Please enter the Name"),
  batch: yup.string().required("Please enter the Batch"),
  qualification: yup.string().required("Please enter the Qualification"),
  experience: yup.number().required("Please enter the Experience"),
  taskComplition: yup.number().required("Please enter the Task Completion"),
  gender: yup.string().required("Please enter the Gender"),
});

function Add() {
  const { data, setData } = AppStates();

  const { handleSubmit, values, handleChange, handleBlur, touched, errors } = useFormik({
    initialValues: {
      name: "",
      batch: "",
      qualification: "",
      experience: 0,
      taskComplition: 0,
      gender: "",
    },
    validationSchema: fieldValidationSchema,
    onSubmit: (newStudentData) => {
      console.log("onsubmit", newStudentData);
      createStudent(newStudentData);
    }
  });

  // To handle onSubmit
  const createStudent = async (newStudentData) => {
    // Fetch data
    const response = await fetch("https://express-deploy-pi.vercel.app/students/add", {
      method: "POST",
      body: JSON.stringify(newStudentData),
      headers: {
        "content-Type": "application/json"
      }
    });

    const data2 = await response.json();

    setData([...data, data2]);
  }

  return (
    <Base heading={"Add Data"}>
      <div className="container">
        {/* row*/}
        <div className="row add-container">
          {/* col */}
          <div className="col-12">
            {/* col add-form*/}
            <form className="container add-form" onSubmit={handleSubmit}>
              <h1 className="add-heading"><b>Add Student's Data</b></h1>

              <TextField
                fullWidth
                placeholder="Enter the Name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.name && errors.name ? errors.name : ""}</div>

              <TextField
                fullWidth
                placeholder="Enter the Batch"
                name="batch"
                type="batch"
                value={values.batch}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.batch && errors.batch ? errors.batch : ""}</div>

              <TextField
                fullWidth
                placeholder="Enter the Qualification"
                name="qualification"
                type="qualification"
                value={values.qualification}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.qualification && errors.qualification ? errors.qualification : ""}</div>

              <TextField
                fullWidth
                placeholder="Enter the Experience"
                name="experience"
                type="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.experience && errors.experience ? errors.experience : ""}</div>

              <TextField
                fullWidth
                placeholder="Enter the Task Completion"
                name="taskComplition"
                type="taskComplition"
                value={values.taskComplition}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.taskComplition && errors.taskComplition ? errors.taskComplition : ""}</div>

              <TextField
                fullWidth
                placeholder="Enter the Gender"
                name="gender"
                type="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{ color: "red" }}>{touched.gender && errors.gender ? errors.gender : ""}</div>

              <button type="submit" className='btn btn-success'>Add</button>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Add;
