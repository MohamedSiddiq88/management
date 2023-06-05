import React from "react";
import Base from "../Base/Base";
import "./Add.css";
import { TextField } from "@mui/material";
import * as yup from 'yup';
import { useFormik } from "formik";
import { AppStates } from "../Context/AppProvider";



  //field validation
  export const fieldValidationSchema=yup.object({
    name:yup.string().required("Please enter the Name"),
    age:yup.number().required("Please enter the Age").min(15,"Please Enter Valid Age minimum Age is 15").max(24,"Please Enter Valid Age maximum Age is 24"),
    gender:yup.string().required("Please enter the Gender"),
    clas:yup.string().required("Please enter the Class"),
    bloodGroup:yup.string().required("Please enter the Blood Group")
  })


function Add() {
  const {data,setData}=AppStates();

  const {handleSubmit, values, handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      clas:"",
      bloodGroup:""
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newStudentData)=>{
      console.log("onsubmit",newStudentData)
      createStudent(newStudentData)
    }
  })


  // to ahndel onsubmit
  const createStudent = async(newStudentData) => {
    
    //fetch data
    const response=await fetch("https://645899734eb3f674df7800be.mockapi.io/students", {
      method:"POST",
      body:JSON.stringify(newStudentData),
      headers:{
        "content-Type":"application/json" 
      }
    })

    const data2=await response.json();

    

    setData([...data, data2])
  }

  return (
    <Base
      heading={"Add Data"}
    >
      <div className="container">
        {/* row*/}
        <div className="row add-container">


          {/* col */}
          <div className="col-12">

            {/* col add-form*/}
            <form className="container add-form " onSubmit={handleSubmit}>
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
              <div style={{color:"red"}}>{touched.name && errors.name ? errors.name : ""}</div>
              


              <TextField
                fullWidth
                placeholder="Enter the Age"
                name="age"
                type="age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{color:"red"}}>{touched.age && errors.age  ? errors.age : ""}</div>
              


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
              <div style={{color:"red"}}>{touched.gender && errors.gender  ? errors.gender : ""}</div>
              


              <TextField
                fullWidth
                placeholder="Enter the Class"
                name="clas"
                type="clas"
                value={values.clas}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{color:"red"}}>{touched.clas && errors.clas  ? errors.clas : ""}</div>
              

              <TextField
                fullWidth
                placeholder="Enter the Blood Group"
                name="bloodGroup"
                type="bloodGroup"
                value={values.bloodGroup}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{color:"red"}}>{touched.bloodGroup && errors.bloodGroup  ? errors.bloodGroup : ""}</div>
              






              <button type="submit" className='btn btn-success' >Add</button>
            </form>
          </div>
        </div>
      </div>






    </Base>
  );

}



export default Add