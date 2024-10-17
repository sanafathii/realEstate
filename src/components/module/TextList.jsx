import styles from "./TextList.module.css";
import { MdOutlineLibraryAdd } from "react-icons/md";
import { AiOutlineDelete } from "react-icons/ai";

function TextList({ title, profileDate, setProfileDate, type }) {
  const addHandler = () => {
    setProfileDate({ ...profileDate, [type]: [...profileDate[type], ""] });
  };

  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...profileDate[type]];
    list[index] = value;
    setProfileDate({ ...profileDate, [type]: list });
  };

  const deleteHandler = (index) => {
    const list = [...profileDate[type]];
    list.splice(index, 1);
    setProfileDate({ ...profileDate, [type]: list });
  };
  return (
    <div className={styles.container}>
      <p>{title}</p>
      {profileDate[type].map((item, index) => {
        return (
          <div key={index} className={styles.card}>
            <input
              type="text"
              value={item}
              onChange={(e) => changeHandler(e, index)}
            />
            <button onClick={() => deleteHandler(index)}>
              حذف
              <AiOutlineDelete />
            </button>
          </div>
        );
      })}
      <button onClick={addHandler}>
        افزودن
        <MdOutlineLibraryAdd />
      </button>
    </div>
  );
}

export default TextList;
