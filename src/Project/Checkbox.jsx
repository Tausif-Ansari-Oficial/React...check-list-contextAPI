import React, { useContext } from 'react';
import { Acontex } from './Main';

export default function Checkbox() {
  const { state, setState } = useContext(Acontex);

  const changeHandle = (e) => {
    
    const { name, checked } = e.target;
    setState((argu) => ({ ...argu, [name]: checked }));
    console.log(state);
  };

  return (
    <div>
      <form action="" method="post">
        
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






// import React, { useContext } from 'react';
// import { Acontex } from './Main';

// export default function Checkbox() {
//   const { state, setState } = useContext(Acontex);

//   const changHndle = (e) => {
//     const { name, checked } = e.target.name;
//     setState((prevState) => ({ ...prevState, [name]: checked }));
//   };

//   return (
//     <div>
//       <form action="" method="post">
//         <div>
//           <input
//             onChange={changHndle}
//             type="checkbox"
//             name="DDLJ"
//             checked={state.DDLJ}
//           /><label htmlFor="DDLJ">DDLJ</label>

//           <input
//             onChange={changHndle}
//             type="checkbox"
//             name="raees"
//             checked={state.raees}

//           /><label htmlFor="raees">raees</label>
//         </div>
//       </form>
//     </div>
//   );