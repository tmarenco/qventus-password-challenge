import styles from "./password-component.module.css";

export const Title = () => {
  return (
    <div className={styles["title-container"]}>
      <p className={styles["title"]}>Password Component</p>
    </div>
  );
};
