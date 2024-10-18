import React from "react";
import styles from "./CustomDatePicker.module.css";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function CusomeDatePicker({ setProfileDate, profileDate }) {
  const changeHandler = (e) => {
    const date = new Date(e);
    setProfileDate({ ...profileDate, constractionDate: date });
  };
  return (
    <div className={styles.container}>
      <p>تاریخ ساخت</p>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        value={profileDate.constractionDate}
        calendarPosition="bottom-right"
        onChange={changeHandler}
      />
    </div>
  );
}

export default CusomeDatePicker;
