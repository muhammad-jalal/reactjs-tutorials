import logo from './logo.svg';
import './App.css';

import ClassCounter from './Components/ClassCounter';
import FunctionalCounter from './Components/FunctionalCounter';

function App() {
  return (
    <div className="App">
      <h1>Assignment-2 Counter Application</h1>
      <ClassCounter/>
      <FunctionalCounter />
    </div>
  );
}

export default App;
