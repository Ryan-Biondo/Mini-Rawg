import styles from '../styles/Nav.module.css';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <img
        src="./src/assets/images/profilepic.png"
        alt="profilepic"
        id={styles.profilePic}
      />

      <input type="text" placeholder="Search" className={styles.searchBar} />

      <div className={styles.darkMode}></div>
    </nav>
  );
};

export default Nav;
