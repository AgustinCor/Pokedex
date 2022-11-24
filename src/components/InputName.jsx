import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeName } from '../store/slices/name.slice';


const InputName = () => {

  const [userName,setUserName]=useState("");

  const navigate =useNavigate();
  const dispatch =useDispatch();
  

  const enterName =()=>{
        dispatch(changeName(userName));
        navigate("/pokemon");
  }

    return (
        <div className='input-background'>
          <div className='input-background-int'>
            <h1>Wasp Trainer!</h1>
            <h4>Introduce your name here</h4>
             <input 
               className='title-input'
               type="text" 
               onChange={e => setUserName(e.target.value)}
               value={userName} />
             <button 
             className='user-button'
             onClick={enterName}>
              <i class="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
    );
};

export default InputName;