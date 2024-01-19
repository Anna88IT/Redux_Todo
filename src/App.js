import './App.css';
// import { useDispatch, useSelector } from 'react-redux';
import { Form } from './components/Form';
import { Todos } from './components/Todos';
import { Delete } from './components/Delete';

function App() {
  return (
    <div className="App">
      <h1 className='text-center'>TODO-APP USING REACT-REDUX</h1>
      <Form />
      <Todos />
      <Delete />
    </div>
  );
}

export default App;
