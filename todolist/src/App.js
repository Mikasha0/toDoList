import Navbar from './component/Navbar';
import Form from './component/Form';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
    <Navbar title="toDoList"/>
    <Router>
      <Routes>
        <Route path="/toDoList" element={<Form/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
