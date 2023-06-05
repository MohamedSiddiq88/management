import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import DashBoard from './Components/DashBoard';
import Studentsprofiles from './Components/Studentsprofiles';
import Teachersprofiles from './Components/Teachersprofiles';
import Add from './Components/Add';
import Edit from './Components/Edit';
import { useEffect, useState } from 'react';
import EditTeacher from './Components/EditTeacher';
import AddTeacher from './Components/AddTeacher';
import { AppStates } from './Context/AppProvider';



function App() {
  
  return (
    <div className="App">
      
      
      <Switch>
        <Route exact path="/">
          <DashBoard></DashBoard>
        </Route>

        <Route path="/student">
          <Studentsprofiles></Studentsprofiles>
        </Route>


        <Route path="/teacher">
          <Teachersprofiles></Teachersprofiles>
        </Route>


        <Route path="/add">
          <Add></Add>
        </Route>


        <Route path="/addteacher">
          <AddTeacher></AddTeacher>
        </Route>


        <Route path="/edit">
          <Edit></Edit>
        </Route>



        <Route path="/editteacher">
          <EditTeacher></EditTeacher>
        </Route>



      </Switch>


    </div>
  );
}

export default App;
