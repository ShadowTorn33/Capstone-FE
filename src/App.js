import './App.css';
import { Routes, Route } from "react-router";
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Navbar from './components/Navbar';
import TablesPage from './pages/TablesPage';
import Table from './components/Table';
import ReviewPage from './pages/ReviewPage'
import FurniturePage from './pages/FurniturePage';
import ContactPage from './pages/ContactPage';
import CreateProjectPage from './pages/CreateProjectPage';


function App() {
  return (
    <>
        <Navbar />
       <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/aboutpage' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/tablespage' element={<TablesPage />} />
        <Route path='/furniturepage' element={<FurniturePage />} />
        <Route path='/reviewspage' element={<ReviewPage />} />
        <Route path='/:id' element={<Table />} />
        {/* <Route path='/cabinetpage' element={ <CabinetPage />} />  */}
        <Route path='/createprojectpage' element={ <CreateProjectPage />} /> 
     </Routes>
    </>
  );
}

export default App;
