import React, {useState, useEffect} from 'react';
import styles from './NavBar.module.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [screenWidth, setScreenWidth] = useState(window.innerWidth)

    useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

        return () => {
        window.removeEventListener('resize', changeWidth)
    }


  }, [])
    const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  return (
      <nav>
          {(toggleMenu || screenWidth > 500) && (
      <ul className={styles.list}>
          <li className={styles.items}>Home</li>
          <li className={styles.items}>Services</li>
          <li className={styles.items}>Contact</li>
        </ul>
              )}
      <button onClick={toggleNav} className={styles.btn}>BTN</button>
    </nav>
  )
}

export default Navbar;