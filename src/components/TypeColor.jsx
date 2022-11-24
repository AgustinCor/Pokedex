import axios from 'axios';
import React, { useEffect, useState } from 'react';

const TypeColor = ({url}) => {
    const [pokemon,setPokemon]=useState({});

    const types={
        grass:"#0f0",
        fire:"#f00",
        water:"#00f",
        bug:"#f60",
        electric:"#ff0",
        rock:"#555",
        normal:"#0ff",
        ghost:"#f0f",
        steel:"#999",
        psychich:"#f05",
        dragon:"#f66",
        ice:"#2ff",
        dark:"#000",
        fairy:"#3f0",
        ground:"#f90",
        poison:"#055",
        fighting:"#599",

    }
    const change=()=>{
        if (pokemon.types?.[0].type.name == "grass"){
            return types.grass;
        }else if (pokemon.types?.[0].type.name == "fire"){
           return types.fire;
        }else if (pokemon.types?.[0].type.name == "water"){
            return types.water;
         }else if (pokemon.types?.[0].type.name == "bug"){
            return types.bug;
         }else if (pokemon.types?.[0].type.name == "electric"){
            return types.electric;
         }else if (pokemon.types?.[0].type.name == "rock"){
            return types.rock;
         }else if (pokemon.types?.[0].type.name == "normal"){
            return types.normal;
         }else if (pokemon.types?.[0].type.name == "ghost"){
            return types.ghost;
         }else if (pokemon.types?.[0].type.name == "steel"){
            return types.steel;
         }else if (pokemon.types?.[0].type.name == "psychich"){
            return types.psychich;
         }else if (pokemon.types?.[0].type.name == "dragon"){
            return types.dragon;
         }else if (pokemon.types?.[0].type.name == "ice"){
            return types.ice;
         }else if (pokemon.types?.[0].type.name == "dark"){
            return types.dark;
         }else if (pokemon.types?.[0].type.name == "fairy"){
            return types.fairy;
         }else if (pokemon.types?.[0].type.name == "ground"){
            return types.ground;
         }else if (pokemon.types?.[0].type.name == "poison"){
            return types.poison;
         }else if (pokemon.types?.[0].type.name == "fighting"){
            return types.fighting;
         }
    };

    useEffect(()=>{
        axios.get(url)
          .then(res =>(setPokemon(res.data)))
       },[])
   
    return (
      <div className="pokemon-stats-info">
         <b className='type' style={{background:change()}}></b>
        <h4 >Type:{pokemon.types?.[0].type.name}</h4>
      </div>
    );
};

export default TypeColor;