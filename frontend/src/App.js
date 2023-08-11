import logo from './logo.svg';
import './App.css';
import { GlobalContextProvider } from './context/store';
import Table from './components/Table';
import Form from './components/Form';
import ValorGasto from './components/ValorGasto';
import ControlForm from './components/ControlForm';
import Filters from './components/Filters';

function App() {
  return (
   <GlobalContextProvider>
    <div id="corpo">
      <ValorGasto/>
      <Filters/>
    <ControlForm/>
     <Table/>
    </div>
   </GlobalContextProvider>
  );
}

export default App;
