import React, { createContext, useContext, useEffect, useState } from "react";


const StudentCtx = createContext(null)
function AppProvider({children}){
    
  
    const [ind,setInd]=useState();  
    const [data,setData]=useState([]);

    async function fetchStudents(){
        let response = await fetch("https://express-deploy-pi.vercel.app/students/all", {
          method:"GET"
        });
        let result = await response.json();
        setData(result);
      }
    

    
      useEffect(() => {
        fetchStudents();
      }, []);

    return (
        <StudentCtx.Provider
            value={{data,setData,ind,setInd}}
        >
            {children}
        </StudentCtx.Provider>
    )
}


export const AppStates = ()=>{
    return useContext(StudentCtx)
}
export default AppProvider