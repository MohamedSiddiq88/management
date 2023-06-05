import React from "react";
import Base from "../Base/Base";
import "./Add.css";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { TextField } from "@mui/material";
import { AppStates } from "../Context/AppProvider";
import * as yup from 'yup';
import { useFormik } from "formik";

//field validation
export const fieldValidationSchema = yup.object({
  name: yup.string().required("Please enter the Name"),
  batch: yup.string().required("Please enter the Batch"),
  qualification: yup.string().required("Please enter the Qualification"),
  experience: yup.number().required("Please enter the Experience"),
  taskComplition: yup.number().required("Please enter the Task Completion"),
  gender: yup.string().required("Please enter the Gender"),
});

function Edit() {
  const { data, setData, ind, setInd } = AppStates();

  const {
    handleSubmit,
    values,
    setValues,
    handleChange,
    handleBlur,
    touched,
    errors,
  } = useFormik({
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
      studentUpdate(newStudentData);
    },
  });

  const history = useHistory();

  useEffect(() => {
    const editStudent = data[ind];
    setValues({
      id: editStudent._id,
      name: editStudent.name,
      batch: editStudent.batch,
      qualification: editStudent.qualification,
      experience: editStudent.experience,
      taskComplition: editStudent.taskComplition,
      gender: editStudent.gender,
    });
  }, [data, ind]);

  async function studentUpdate(newStudentData) {
    const editedData = {
      name: values.name,
      batch: values.batch,
      qualification: values.qualification,
      experience: values.experience,
      taskComplition: values.taskComplition,
      gender: values.gender,
    };

    data[ind] = editedData;

    const response = await fetch(
      `https://express-deploy-pi.vercel.app/edit/647cb3c63d9e10c954fcf2d4`,

      {
        method: "PUT",
        body: JSON.stringify(newStudentData),
        headers: {
          "content-Type": "application/json",
        },
      }
    );

    const updatedData = await response.json();
    if (updatedData) {
      console.log("Updated data", updatedData);
      setData([...data]);
      history.push("/student");
    }
  }

  return (
    <Base heading={"Edit Data"}>
      <div className="container">
        {/* row*/}
        <div className="row add-container">
          <div className="col-12">
            {/* col add-form*/}
            <form className="container add-form" onSubmit={handleSubmit}>
              <h1 className="add-heading">
                <b>Edit Student's Data</b>
              </h1>
              <TextField
                fullWidth
                placeholder="Enter the Name"
                name="name"
                type="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.name && errors.name ? errors.name : ""}
              </div>
              <TextField
                fullWidth
                placeholder="Enter the Batch"
                name="batch"
                type="batch"
                value={values.batch}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.batch && errors.batch ? errors.batch : ""}
              </div>
              <TextField
                fullWidth
                placeholder="Enter the Qualification"
                name="qualification"
                type="qualification"
                value={values.qualification}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.qualification && errors.qualification
                  ? errors.qualification
                  : ""}
              </div>
              <TextField
                fullWidth
                placeholder="Enter the Experience"
                name="experience"
                type="experience"
                value={values.experience}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.experience && errors.experience
                  ? errors.experience
                  : ""}
              </div>
              <TextField
                fullWidth
                placeholder="Enter the Task Completion"
                name="taskComplition"
                type="taskComplition"
                value={values.taskComplition}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.taskComplition && errors.taskComplition
                  ? errors.taskComplition
                  : ""}
              </div>
              <TextField
                fullWidth
                placeholder="Enter the Gender"
                name="gender"
                type="gender"
                value={values.gender}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <div style={{ color: "red" }}>
                {touched.gender && errors.gender ? errors.gender : ""}
              </div>
              <button className="btn btn-success">Update</button>
            </form>
          </div>
        </div>
      </div>
    </Base>
  );
}

export default Edit;
