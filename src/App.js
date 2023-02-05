import './App.css';
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import TablePage from './pages/TablePage';
// import CabinetPage from './pages/CabinetPage'
import ContactPage from './pages/ContactPage';
import CreateProjectPage from './pages/CreateProjectPage';


function App() {
  return (
    <>
        <Navbar />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/tablespage' element={<TablePage />} />
        {/* <Route path='/cabinetpage' element={ <CabinetPage />} />  */}
        <Route path='/createprojectpage' element={ <CreateProjectPage />} /> 
     </Routes>
    </>
  );
}

export default App;
