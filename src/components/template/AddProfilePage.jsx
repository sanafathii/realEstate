"use client";
import React, { useState } from "react";
import styles from "./AddProfilePage.module.css";
import TextInput from "../module/TextInput";
import RadioList from "../module/RadioList";
import TextList from "../module/TextList";
import CusomeDatePicker from "../module/CusomeDatePicker";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../module/Loader";

function AddProfilePage() {
  const [profileDate, setProfileDate] = useState({
    title: "",
    description: "",
    location: "",
    phoneNumber: "",
    price: "",
    realState: "",
    constractionDate: new Date(),
    gategorie: "",
    rules: [],
    amenities: [],
  });
  const [loading, setLoading] = useState(false);
  const submitHandler = async () => {
    setLoading(true);
    const res = await fetch("/api/profile", {
      method: "POST",
      body: JSON.stringify(profileDate),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    setLoading(false);
    if (data.error) {
      toast.error(data.error);
    } else {
      setProfileDate({
        title: "",
        description: "",
        location: "",
        phoneNumber: "",
        price: "",
        realState: "",
        constractionDate: new Date(),
        gategorie: "",
        rules: [],
        amenities: [],
      });
      toast.success(data.message);
    }
  };
  return (
    <div className={styles.container}>
      <h3>ثبت آگهی</h3>
      <TextInput
        title="عنوان آگهی"
        name="title"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="توضیحات"
        name="description"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
        textarea={true}
      />
      <TextInput
        title="آدرس"
        name="location"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="شماره تماس"
        name="phoneNumber"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="قیمت(تومان)"
        name="price"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextInput
        title="بنگاه"
        name="realState"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <RadioList profileDate={profileDate} setProfileDate={setProfileDate} />
      <TextList
        type="amenities"
        title="امکانات رفاهی"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <TextList
        type="rules"
        title="قوانین"
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <CusomeDatePicker
        profileDate={profileDate}
        setProfileDate={setProfileDate}
      />
      <Toaster />
      {loading ? (
        <Loader />
      ) : (
        <button className={styles.submit} onClick={submitHandler}>
          ثبت آگهی
        </button>
      )}
    </div>
  );
}

export default AddProfilePage;
