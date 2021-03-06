import { ListFormat } from 'typescript';
import './App.css';
import { Button } from './components/button';
import { Container } from './components/container';
import { EmployeeDetails } from './components/employee';
import { Greet } from './components/greet';
import { Header } from './components/header';
import { Input } from './components/input';
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
      firstName: "Ross",
      lastName: "Grass"
    },
    {
      firstName: "Monika",
      lastName: "Ross"
    },
    {
      firstName: "Chandler",
      lastName: "monika"
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
      <Greet name="deekshith" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <EmployeeDetails info={employee} />
      <Status status='loading' />
      <Oscar>
        <Header>Oscar goes to Leonardo Dicpario!</Header>
      </Oscar>
      <Button onClickButton={(event, id) => console.log("Button Clicked", event, id)} ></Button>
      <Input value="" />
      <Container styles={{border: '1px solid black', padding: '1rem'}} />
    </div>
  );
}

export default App;
