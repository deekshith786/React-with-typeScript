import './App.css';
import { EmployeeDetails } from './components/employee';
import { Greet } from './components/greet';
import { Header } from './components/header';
import { Oscar } from './components/oscar';
import { Person } from './components/person';
import { PersonList } from './components/personList';
import { Status } from './components/status';

function App() {
  const personName = {
    firstName: "Bruce",
    lastName: "wayne"
  }

  const nameList = [
    {
      first: "Ross",
      last: "Grass"
    },
    {
      first: "Monika",
      last: "Ross"
    },
    {
      first: "Chandler",
      last: "monika"
    }
  ]
  const employee = [
    {
      name: "ross",
      id: 1122,
      team: "abc",
      maritualStatus: true
    },
    {
      name: "Chandler",
      id: 2211,
      team: "xyz",
      maritualStatus: false
    }
  ]

  return (
    <div className="App">
      <Greet name="deekshith"  isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <EmployeeDetails info={employee} />
      <Status status='loading' />
      <Oscar>
        <Header>Oscar goes to Leonardo Dicpario!</Header>
      </Oscar>
    </div>
  );
}

export default App;
