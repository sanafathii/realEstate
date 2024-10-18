import React from "react";
import styles from "./Sidebar.module.css";
import { HiFilter } from "react-icons/hi";
import Link from "next/link";

function Sidebar() {
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
        دسته بندی
      </p>
      <Link href="/buy-residential">همه</Link>
      <Link href="/buy-residential?gategorie=villa">ویلا</Link>
      <Link href="/buy-residential?gategorie=store">مغازه</Link>
      <Link href="/buy-residential?gategorie=apartment">آپارتمان</Link>
      <Link href="/buy-residential?gategorie=office">دفتر</Link>
    </div>
  );
}

export default Sidebar;
