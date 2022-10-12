import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textdiv1}>
        <b><i className={styles.text1}>THE GRINDSET NEVER STOPS</i></b>
      </div>
      <div className={styles.textdiv2}>
        <i className={styles.text2}>sigma bale sigma bale</i>
      </div>
      <img className={styles.image1} src="/sigma-1.gif"/>
      <img className={styles.image2} src="/sigma-2.gif"/>
      <img className={styles.image3} src="/sigma-3.gif"/>
      <img className={styles.image4} src="/sigma-4.gif"/>
      <img className={styles.image5} src="/sigma-5.gif"/>
    </div>
  );
};

export default Home;
