import './App.css';
import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PetsListAll from "./components/PetsListAll"
import PetsListOne from "./components/PetsListOne"
import PetsAdd from "./components/PetsAdd"
import PetsUpdate from "./components/PetsUpdate"


function App() {

  const [allPets, setAllPets] = useState([]);

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route element={<PetsListAll allPets={allPets} setAllPets={setAllPets}/>} path="/" />
    <Route element={<PetsUpdate />} path="/pets/edit/:id" />
    <Route element={<PetsListOne />} path="/pets/:id" />
    <Route element={<PetsAdd />} path="/pets/add" />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
