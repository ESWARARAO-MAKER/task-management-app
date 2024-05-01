import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './components/Home';
import { Tasks } from './components/Tasks';
import { Summary } from './components/Summary';
import { ListofTasks } from './components/ListOfTasks';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <div className="App d-flex flex-column align-items-center">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/add' exact Component={Tasks}/>
          <Route path='/summary' exact Component={Summary}/>
          <Route path = "/tasks" exact Component={ListofTasks}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
