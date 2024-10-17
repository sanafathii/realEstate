import React from "react";
import styles from "./TextInput.module.css";
import { p2e } from "@/utils/replaceNumber";

function TextInput({
  title,
  name,
  profileDate,
  setProfileDate,
  textarea = false,
}) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileDate({
      ...profileDate,
      [name]: p2e(value),
    });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {textarea ? (
        <textarea
          type="text"
          name={name}
          value={profileDate[name]}
          onChange={changeHandler}
        />
      ) : (
        <input
          type="text"
          name={name}
          value={profileDate[name]}
          onChange={changeHandler}
        />
      )}
    </div>
  );
}

export default TextInput;
