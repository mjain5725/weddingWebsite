import React from 'react';
import styles from './SelectGender.module.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { changeSelectedGender } from '../../store/mainReducer';

const SelectGender = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();

  const navigateLandingPage = (selectedValue) => {
    dispatch(changeSelectedGender(selectedValue));
    navigate('/landing');
  }

  return (
    <div className={styles.bodyDiv}>
      <div>
        <div className={styles.headingDiv}>
          <h1 className={styles.heading}> Please Select Your Side!</h1>
        </div>
        <div className={styles.buttonDiv}>
          <button
            className={styles.button}
            onClick={() => navigateLandingPage('male')}
          >
            Groom
          </button>
          <button
            className={styles.button}
            onClick={() => navigateLandingPage('female')}
          >
            Bride
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelectGender;
