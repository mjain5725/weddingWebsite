import React from 'react';
import { useSelector } from 'react-redux';
import Bride from '../Bride/bride';
import Groom from '../Groom/groom';

const LandingPage = () => {
    let renderComponent;
  const gender = useSelector((state) => state.data.gender);
    console.log(`MANISH ${gender}`);
    
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
