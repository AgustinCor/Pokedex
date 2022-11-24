import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PokemonSearcher = ({url}) => {
    const [type,setType]=useState([]);
  
    const getPokemons =url;
    const [pokemonName, setPokemonName]=useState('');
    const [searcher,setSearcher]=useState("name");

    const navigate=useNavigate();
    
    useEffect(()=>{
        axios.get("https://pokeapi.co/api/v2/type")
          .then(res => setType(res.data.results))
    },[]);

    const searchPokemon=()=>{
        navigate(`/pokemon/${pokemonName.toLowerCase()}`)
     }
   
     const filterType =(e)=>{
       const url =e.target.value;
       axios.get(url)
         .then(res => getPokemons(res.data.pokemon))
     }

    const isSearcher=()=>{
        if(searcher === "name"){
         return(
           <div>
             <input 
               className='pokemon-box-input'
               type="text" 
               placeholder='Search pokemon'
               value={pokemonName}
              onChange={e => setPokemonName(e.target.value)}
             />
             <button 
               className='pokemon-searcher'
              onClick={searchPokemon}>
               <i className="fa-solid fa-magnifying-glass"></i>
                </button>
           </div>
         )
        }else if (searcher === "type"){
         return (
           <select onChange={filterType} name='' id="">
                   {
                    type.map(type =>(
                       <option 
                         value={type.url}
                         key={type.name}
                         >
                             {type.name}
                       </option>
                    ))
                   }
                </select>
         )
        }
      }
    return (
        <>
        <div className='button-searcher-container'>
          <div>
            <h4>Switch by name</h4>
          <button className='searcher-name'
          onClick={()=> setSearcher("name")}>
          </button>
          </div>
          <div>
            <h4>Switch by type</h4>
          <button className='searcher-type'
          onClick={()=> setSearcher("type")}>
          </button>
          </div>
          </div>
        {isSearcher()}
        </>
    );
};

export default PokemonSearcher;