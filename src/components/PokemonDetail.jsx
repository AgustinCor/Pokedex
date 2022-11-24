import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const PokemonDetail = () => {

const [pokemon,setPokemon]=useState({});
const [picture,setPicture]=useState(true)

const {id} =useParams();

useEffect(()=>{
  axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => setPokemon(res.data))
},[])

const isPicture=()=>{
    setPicture(!picture);
}

console.log(pokemon);

    return (
        <div className='pokemon-detail-box'>
          <div className='go-back'>
            <Link to="/pokemon">
                  <i className="fa-regular fa-circle-left"></i>
            </Link>
          </div>  
          <div className='pokemon-detail'>
            <h2 className='pokemon-detail-name'>{pokemon.name}</h2>
             
            <button className='pokemon-detail-changeimage'
            onClick={isPicture}>
               <i className="fa-solid fa-paintbrush"></i>
            </button>

            {picture ?  
            <img className='pokemon-perfile-image' src={pokemon.sprites?.front_default} alt="" /> 
            : 
            <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
            }

            <div className='pokemon-detail-first-stats'>
              <h3 className='pokemon-detail-type'>Type:{pokemon.types?.[0].type.name}</h3>
              <h3 className="pokemon-detail-weight">Weight:{pokemon.weight}</h3>
            </div>
            <div className='pokemon-detail-others-stats'>
              <h3>Hp
                <b className="pokemon-detail-hp">{pokemon.stats?.[0].base_stat}</b>
              </h3>
              <h3>Attack
                <b className="pokemon-detail-attack">{pokemon.stats?.[1].base_stat}</b>
                </h3>
              <h3>Deffense
                <b className="pokemon-detail-defense">{pokemon.stats?.[2].base_stat}</b>
                </h3>
            </div>
            <div className='pokemon-detail-anothers-stats'>
              <h3>Special attack
                <b className="pokemon-detail-special-attack">{pokemon.stats?.[3].base_stat}</b>
              </h3>
             <h3>Special defense
                <b className="pokemon-detail-special-defense">{pokemon.stats?.[4].base_stat}</b>
              </h3>
              <h3>Speed
                <b className="pokemon-detail-speed">{pokemon.stats?.[5].base_stat}</b>
              </h3>
              <h3>Base experience
                <b className="pokemon-detail-base-experience">{pokemon.base_experience}</b>
              </h3>
            </div>
            </div>
        </div>
    );
};

export default PokemonDetail;