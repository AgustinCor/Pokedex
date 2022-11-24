import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TypeColor from './TypeColor';

const PokemonCard = ({url}) => {

    const [pokemon,setPokemon]=useState({})

    useEffect(()=>{
      axios.get(url)
       .then(res =>(setPokemon(res.data)))
    },[])


    return (
        <Link to={`/pokemon/${pokemon.id}`}>
            <li>
              <img src={pokemon.sprites?.front_default} alt="" />
              <h3 className='pokemon-name'>{pokemon.name}</h3>
              <div className='pokemon-stats'>
               <TypeColor url={url}/>
                <div className="pokemon-stats-info">
                  <b className="hp"></b>
                  <h4>HP:{pokemon.stats?.[0].base_stat}</h4>
                </div>
                <div className="pokemon-stats-info">
                  <b className="attack"></b>
                  <h4>Atttack:{pokemon.stats?.[1].base_stat}</h4>
                </div>
              </div>
            </li>
        </Link>
    );
};

export default PokemonCard;