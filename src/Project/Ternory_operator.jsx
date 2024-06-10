import React, { useContext, useState } from 'react';
import { Acontex } from './Main';

function TernaryOperator({bgmi,freeFire,clashOfClans,smackDown}) {
  const {state, setState} = useContext(Acontex);

  return (
    <div>
{/* when checklist items was clicked  */}
      {state.BGMI === false ? null : bgmi}
      {state.freeFire === false ? null : freeFire}
      {state.clashOfClans === false ? null : clashOfClans}
      {state.smackDown === false ? null : smackDown}

      <br />
    </div>
  );
}

export default TernaryOperator;
