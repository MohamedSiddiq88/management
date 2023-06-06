import './App.css';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import { Route } from 'react-router-dom/cjs/react-router-dom';
import DashBoard from './Components/DashBoard';
import Studentsprofiles from './Components/Studentsprofiles';
import Add from './Components/Add';
import Edit from './Components/Edit';




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


        


        <Route path="/add">
          <Add></Add>
        </Route>


       


        <Route path="/edit">
          <Edit></Edit>
        </Route>



        



      </Switch>


    </div>
  );
}

export default App;
