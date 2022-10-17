import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css';
import { GoThreeBars } from 'react-icons/go';
import { VscChromeClose } from 'react-icons/vsc';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  let icon;
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  let navigate = useNavigate();

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    return () => {
      window.removeEventListener('resize', changeWidth);
    };
  }, []);
  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  if (!toggleMenu) {
    icon = <GoThreeBars />;
  } else {
    icon = <VscChromeClose />;
  }
  
  return (
    <nav>
      {(toggleMenu || screenWidth > 500) && (
        <ul className={styles.list}>
          <li className={styles.items}><button className={ styles.liBtn} onClick={() => navigate('/')}>Select Side</button></li>
          <li className={styles.items}><button className={ styles.liBtn} onClick={() => navigate('/')}>Venues</button></li>
          <li className={styles.items}><button className={ styles.liBtn} onClick={() => navigate('/')}>Contact Us</button></li>
        </ul>
      )}
      <button onClick={toggleNav} className={styles.btn}>
        {icon}
      </button>
    </nav>
  );
};

export default Navbar;
