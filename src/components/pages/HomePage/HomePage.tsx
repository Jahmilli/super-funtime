import React from "react";
import Grid from "../../presentational/Grid/Grid";
import styles from "./HomePage.module.css";


const HomePage: React.FunctionComponent = () => {
  return (
    <div className={styles.homePageLockup}>
      <Grid size={10}/>
    </div>
  );
}

export default HomePage;