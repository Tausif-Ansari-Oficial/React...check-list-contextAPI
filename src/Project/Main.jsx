import React, { createContext, useState } from 'react'
import Checkbox from './Checkbox'
import Ternory_operator from './Ternory_operator'
import BGMI from './Game/BGMI'
import FreeFire from './Game/FreeFire'
import ClashOfClance from './Game/ClashOfClance'
import SmackDown from './Game/SmackDown'
import './style.css'
// assign create "createContect()" hook into a variable to provide state to all child components
export const Acontex=createContext()

export default function Main() {
// state 
    const [state,setState]=useState({
      BGMI:false,
      freeFire:false,
      clashOfClans:false,
      smackDown:false,
    })
  return (
      <Acontex.Provider value={{state,setState}} >

        <div className="">
{/* this is main heading */}
          <h3 className='d-flex justify-content-center'>What is youre faurete game here?</h3>
{/* checked UI */}
          <div className="flex fix">{/* here fix means (100px height) */}
{/* "Ternory_operator" is a component. which is contantain all  */}
            <Ternory_operator bgmi={<BGMI/>}/>
            <Ternory_operator freeFire={<FreeFire/>}/>
            <Ternory_operator clashOfClans={<ClashOfClance/>}/>
            <Ternory_operator smackDown={<SmackDown/>}/>
          </div>
        
        <div className="flex">
          <Checkbox />
        </div>
          
          </div>
      </Acontex.Provider>
    )
  }



// import React, { createContext, useState } from 'react';
// import Checkbox from './Checkbox';

// export const Acontex = createContext();

// export default function Main() {
//   const [state, setState] = useState({
//     DDLJ: false,
//     raees: false,
//   });

//   return (
//     <Acontex.Provider value={{ state, setState }}>
//       Check box heading
//       <Checkbox />
//       {console.log(state)}
//     </Acontex.Provider>
//   );
// }
