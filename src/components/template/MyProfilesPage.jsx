import React from "react";
import styles from "./MyProfilesPage.module.css";
import DashboardCard from "../module/DashboardCard";

function MyProfilesPage({ profiles }) {
  return (
    <div>
      {profiles.length ? null : (
        <p className={styles.text}>هیچ آگهی ثبت نشده است</p>
      )}

      {profiles.map((item) => {
        return (
          <DashboardCard
            key={item._id}
            data={JSON.parse(JSON.stringify(item))}
          />
        );
      })}
    </div>
  );
}

export default MyProfilesPage;
