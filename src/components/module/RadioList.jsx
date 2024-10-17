import React from "react";
import styles from "./RadioList.module.css";

function RadioList({ profileDate, setProfileDate }) {
  const { gategorie } = profileDate;
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProfileDate({ ...profileDate, [name]: value });
  };
  return (
    <div className={styles.container}>
      <p>دسته بندی</p>
      <div className={styles.main}>
        <div>
          <label htmlFor="villa">ویلا</label>
          <input
            type="radio"
            name="gategorie"
            value="villa"
            id="villa"
            checked={gategorie === "villa"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="apartment">آپارتمان</label>
          <input
            type="radio"
            name="gategorie"
            value="apartment"
            id="apartment"
            checked={gategorie === "apartment"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="store">مغازه</label>
          <input
            type="radio"
            name="gategorie"
            value="store"
            id="store"
            checked={gategorie === "store"}
            onChange={changeHandler}
          />
        </div>
        <div>
          <label htmlFor="office">دفتر</label>
          <input
            type="radio"
            name="gategorie"
            value="office"
            id="office"
            checked={gategorie === "office"}
            onChange={changeHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default RadioList;
