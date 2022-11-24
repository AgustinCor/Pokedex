import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import PokemonCard from './PokemonCard';
import PokemonSearcher from './PokemonSearcher';

const Pokemon = () => {

  const userName=useSelector(state => state.name)
  const [pokemons,setPokemons]=useState([]);


 const [page,setPage]=useState(1);
 const pokemonsPerPage=6;

 const lastIndex=page * pokemonsPerPage;
 const firstIndex=lastIndex - pokemonsPerPage;
 

 const totalPages=Math.ceil(pokemons.length /  pokemonsPerPage);
 const pokemonsPaginated=pokemons.slice(firstIndex,lastIndex);

 const numbers=[];

 for(let i =1 ;i < totalPages;i++){
   numbers.push(i);
 }

  useEffect(()=>{
    axios.get("https://pokeapi.co/api/v2/pokemon")
  //  axios.get("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1154")
      .then(res => setPokemons(res.data.results))
  },[])


   return (
       <div className='pokemon-box'>
          <h2 className='pokemon-box-title'> Pokemons </h2>
          <h3 className='pokemon-box-salute'>Welcome! <span>{userName}</span></h3>
          
         <PokemonSearcher url={setPokemons}/>

          <div>
            <div className='maped-buttons'>
              <button className='map-button' disabled={page ===totalPages} 
              onClick={()=> setPage(page - 1)}>
                 <i className="fa-solid fa-chevron-left"></i>
              </button>
             {
                 numbers.map(numbers =>(
                   <button className='map-button-numb'
                   key={numbers}
                   onClick={() => setPage(numbers)}>
                    <b>{numbers}</b>
                   </button>
                 ))
              }
              <button className="map-button" 
              disabled ={page === 1}
              onClick={()=> setPage(page + 1)}>
                 <i className="fa-solid fa-chevron-right"></i>
              </button>
           </div>
          </div>
          <ul>
          {
           pokemonsPaginated.map(pokemon =>(
               <PokemonCard 
                 key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                 url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
                 />
           ))
          }
          </ul>
          <div className='input-nameback'>
            <Link to="/"><i class="fa-solid fa-circle-left"></i></Link>
          </div>
       </div>
   );
};

export default Pokemon;