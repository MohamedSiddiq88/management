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
  age:yup.number().required("Please enter the Age").min(21,"Please Enter Valid Age minimum Age is 21").max(40,"Please Enter Valid Age maximum Age is 50"),
  gender:yup.string().required("Please enter the Gender"),
  subject:yup.string().required("Please enter the Subject"),
  bloodGroup:yup.string().required("Please enter the Blood Group")
})


function AddTeacher() {

  const {data2,setData2}=AppStates();

  const {handleSubmit, values, handleChange,handleBlur,touched,errors}=useFormik({
    initialValues:{
      name:"",
      age:"",
      gender:"", 
      subject:"",
      bloodGroup:""
    },
    validationSchema:fieldValidationSchema,
    onSubmit:(newTeacherData)=>{
      console.log("onsubmit",newTeacherData)
      createTeacher(newTeacherData)
    }
  })

  // to ahndel onsubmit
  const createTeacher = async(newTeacherData) => {
  
     //fetch data
     const response=await fetch("https://645899734eb3f674df7800be.mockapi.io/teachers", {
      method:"POST",
      body:JSON.stringify(newTeacherData),
      headers:{
        "content-Type":"application/json"
      }
    })

    const newdata=await response.json();

    setData2([...data2, newdata])
  }

  return (
    <Base
      heading={"Add Data"}
    >


      {/* container */}
      <div className="container">

        {/* row*/}
        <div className="row add-container">




          {/* col add-form*/}
          <div className="col-12">
          <form className="container-fluid add-form" onSubmit={handleSubmit}>
            <h1 className="add-heading"><b>Add Teacher's Data</b></h1>
            

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
                placeholder="Enter the Subject"
                name="subject"
                type="subject"
                value={values.subject}
                onChange={handleChange}
                onBlur={handleBlur}
                className="textField"
              />
              <div style={{color:"red"}}>{touched.subject && errors.subject  ? errors.subject : ""}</div>
              

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
              



            <button className='btn btn-success'>Add</button>
          </form>
          </div>




          

        </div>


      </div>



    </Base>
  );

}



export default AddTeacher