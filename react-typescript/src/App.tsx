import './App.css';
import { EmployeeDetails } from './components/employee';
import { Greet } from './components/greet';
import { Person } from './components/person';
import { PersonList } from './components/personList';

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "wayne"
  }

  const nameList =[
    {
      first:"Ross",
      last:"Grass"
    },
    {
      first:"Monika",
      last:"Ross"
    },
    {
      first:"Chandler",
      last:"monika"
    }
  ]
  const employee =[
    {
      name:"ross",
      id:1122,
      team:"abc",
      maritualStatus:true
    },
    {
      name:"Chandler",
      id:2211,
      team:"xyz",
      maritualStatus:false
    }
  ]

  return (
    <div className="App">
      <Greet name="deekshith" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList}/>
      <EmployeeDetails info={employee} />
    </div>
  );
}

export default App;
