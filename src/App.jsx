import { useState } from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import InputName from './components/InputName'
import Pokemon from './components/Pokemon'
import PokemonDetail from './components/PokemonDetail'
import ProtectedRoutes from './components/ProtectedRoutes'

function App() {
 

  return (
   <HashRouter>
    <div className='App'>
      <Routes>
         <Route path="/" element={<InputName/>}/>
         <Route element={<ProtectedRoutes/>}>
           <Route path="/pokemon" element={<Pokemon/>}/>
           <Route path="/pokemon/:id" element={<PokemonDetail/>}/>
         </Route>
      </Routes>
      </div>
    </HashRouter>
  )
}

export default App
