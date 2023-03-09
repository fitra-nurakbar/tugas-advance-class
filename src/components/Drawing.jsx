import React from "react";
import styles from "../styles/Day-2.module.css";

export default function Drawing() {
  return (
    <div className={styles.answer}>
      <div className={styles.geometris}>
        {/* part 1 */}
        <div className={styles.part}>
          <div className={styles.square1}></div>
          <div className={styles.square2}></div>
        </div>
        {/* part 2 */}
        <div className={styles.part}>
          <div className={styles.tringale}></div>
          <div className={styles.circle}></div>
        </div>
        {/* part 3 */}
        <div className={styles.part}>
          <div className={styles.full}></div>
        </div>
      </div>
      <div className={styles.rectangle}></div>
    </div>
  );
}
