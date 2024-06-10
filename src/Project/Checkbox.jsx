// to use any context in to current components use"useContext()" hook
import React, { useContext } from 'react';

// import Acontex from maain component 
import { Acontex } from './Main';

export default function Checkbox() {
  
// stor imported cotext to a useContext
  const { state, setState } = useContext(Acontex);

// create a changeHandle function to handle each input changes
  const changeHandle = (e) => {
    const { name, checked } = e.target;// Extract the name and checked properties from the event's target (the input elements)
    // Update the state using setState
    setState((argu) => ({ ...argu, [name]: checked }));// Return a new state object that contains all properties of the state  and updates the property accroding to the input's name with its checked value
    console.log(state);// check state to console
  };

  return (
    <div>
{/* a normal form tag */}
      <form action="" method="post">

{/* b{/* clash of clans list */}ist */}
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

{/* f{/* clash of clans list */}ist */}
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

{/* clash of clans list */}
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

{/* smack down list */}
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
