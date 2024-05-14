// to use any context in to current components use"useContext()" hook
import React, { useContext } from 'react';

// import Acontex from maain component 
import { Acontex } from './Main';

export default function Checkbox() {
  
// stor imported cotext to a useContext
  const { state, setState } = useContext(Acontex);

// create a changeHandle function to handle each input changes
  const changeHandle = (e) => {

// Extract the name and checked properties from the event's target (the input elements)
    const { name, checked } = e.target;

// Update the state using setState
  // Return a new state object that contains all properties of the state  and updates the property accroding to the input's name with its checked value
    setState((argu) => ({ ...argu, [name]: checked }));

// check state to console
    console.log(state);
  };

  return (
    <div>
{/* a normal form tag */}
      <form action="" method="post">

{/* bgmi list */}
      <div className="form-check">
          <input
            className='form-check-input'
            onChange={changeHandle}
            type="checkbox"
            name="BGMI"
            checked={state.BGMI}
          />
          <label htmlFor="BGMI">BGMI</label>
      </div>
      
      <div className="form-check">
          <input
            className='form-check-input'
            onChange={changeHandle}
            type="checkbox"
            name="freeFire"
            checked={state.freeFire}
          />
          <label htmlFor="freeFire">freeFire</label>
        </div>
        
        <div className="form-check">
            <input
              className='form-check-input'
              onChange={changeHandle}
              type="checkbox"
              name="clashOfClans"
              checked={state.clashOfClans}
            />
            <label htmlFor="Clash of Clance">Clash of Clance</label>
          </div>
        
        <div className="form-check">
            <input
              className='form-check-input'
              onChange={changeHandle}
              type="checkbox"
              name="smackDown"
              checked={state.smackDown}
            />
            <label htmlFor="Smack Down">Smack Down</label>
          </div>

      </form>
    </div>
  );
}
