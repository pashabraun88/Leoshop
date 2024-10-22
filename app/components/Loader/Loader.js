import React from "react";
import { loader } from "@/app/utils/images";
import styles from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={styles.container}>
      <div className={styles.loader}>
        <img className={styles.svgLoader} src={loader.src} alt="" />
      </div>
    </div>
  );
}
