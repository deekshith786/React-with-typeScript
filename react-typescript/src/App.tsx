import './App.css';
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

  return (
    <div className="App">
      <Greet name="deekshith" messageCount={20} isLoggedIn={false}/>
      <Person name={personName} />
      <PersonList names={nameList}/>
    </div>
  );
}

export default App;
