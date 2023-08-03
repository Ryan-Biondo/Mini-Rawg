import styles from '../styles/GameDisplay.module.css';

const GameDisplay = () => {
  return (
    <div className={styles.main}>
      <div className={styles.gameDisplay}>
        <div>
          <h2>All Titles ...import</h2>
          <div className="gameSort">
            <select>
              <option value="all">All</option>
              <option value="xbox">Xbox</option>
              <option value="pc">PC</option>
              <option value="playstation">Playstation</option>
              <option value="switch">Switch</option>
            </select>

            <select>
              <option value="relevance">Relevance</option>
              <option value="dateAdded">Date Added</option>
              <option value="name">Name</option>
              <option value="releaseDate">Release Date</option>
              <option value="popularity">Popularity</option>
              <option value="averageRating">Average Rating</option>
            </select>
          </div>
        </div>
        <div className={styles.game}>...import with API</div>
      </div>
    </div>
  );
};

export default GameDisplay;
