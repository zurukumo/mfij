import Navbar from "components/Navbar";
import { ReactNode } from "react";
import { Helmet } from "react-helmet-async";

import styles from "./Template.module.scss";

const Template = (props: { title: string; children: ReactNode }) => (
  <div className={styles.wrapper}>
    <Helmet>
      <title>{props.title} - Magic Juice</title>
    </Helmet>
    <Navbar />
    <div className={styles.content}>
      <h1 className={styles.title}>{props.title}</h1>
      {props.children}
    </div>
  </div>
);

export default Template;
