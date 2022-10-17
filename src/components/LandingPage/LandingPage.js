import React from 'react';
import { useSelector } from 'react-redux';
import Bride from '../Side/Bride/bride';
import Groom from '../Side/Groom/groom';

const LandingPage = () => {
    let renderComponent;
  const gender = useSelector((state) => state.data.gender);
    
    if (gender === 'male') {
        renderComponent =  <Groom/>
    } else {
        renderComponent = <Bride/>
    }
  return (
    <div>
          {renderComponent}
    </div>
  );
};

export default LandingPage;
