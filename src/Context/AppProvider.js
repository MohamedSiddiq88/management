import React, { createContext, useContext, useEffect, useState } from "react";


const StudentCtx = createContext(null)
function AppProvider({children}){
    
  
    const [ind,setInd]=useState();  
    const [data,setData]=useState([]);
    const [data2,setData2]=useState([]);

    async function fetchStudents(){
        let response = await fetch("https://express-deploy-pi.vercel.app/students/all", {
          method:"GET"
        });
        let result = await response.json();
        setData(result);
      }
    
      async function fetchTeachers(){
        let response = await fetch("https://645899734eb3f674df7800be.mockapi.io/teachers", {
          method:"GET"
        });
        let result = await response.json();
        setData2(result);
      }
    
      useEffect(() => {
        fetchStudents();
        fetchTeachers();
      }, []);

    return (
        <StudentCtx.Provider
            value={{data,setData,data2,setData2,ind,setInd}}
        >
            {children}
        </StudentCtx.Provider>
    )
}


export const AppStates = ()=>{
    return useContext(StudentCtx)
}
export default AppProvider