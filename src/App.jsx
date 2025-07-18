import './App.css'
import PeopleTable from './components/people-table/people-table';
import TableMulti from './components/table-multi/table-multi';
import Welcome from './components/welcome/welcome';


const peopleData = [
  {id: 1, firstName: 'Zaza', lastName: 'Vanderquack', age: 13 },
  {id: 2, firstName: 'Gontran', lastName: 'Bonheur', age: 35 },
  {id: 3, firstName: 'Donald', lastName: 'Duck', age: 34 },
  {id: 4, firstName: 'Balthazar', lastName: 'Picsou', age: 79 },
  {id: 5, firstName: 'Géo', lastName: 'Trouve Tout', age: 51 }
];

function App() {
  
  return (
    <>
      <h2>Demo 01</h2>
      <Welcome lastName='Duck' firstName='Della' />
      {/* <Welcome firstName='Gontran' /> */}

      <h2>Demo 02</h2>
      <PeopleTable people={peopleData} />

      <h2>Demo 03</h2>
      <TableMulti />
    
    </>
  )
}

export default App
