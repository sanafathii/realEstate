"use client";

import React, { useState } from "react";
import styles from "./SignupPage.module.css";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { ThreeDots } from "react-loader-spinner";
import { signIn } from "next-auth/react";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const signinHandler = async (e) => {
    e.preventDefault();

    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res.error) {
      toast.error(res.error);
    } else {
      router.push("/");
    }
  };

  return (
    <div className={styles.form}>
      <h4>فرم ورود</h4>
      <form onSubmit={signinHandler}>
        <label htmlFor="email">ایمیل :</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">رمز عبور :</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {loading ? (
          <ThreeDots
            color="#304ffe"
            height={45}
            ariaLabel="three-dots-loading"
            visible={true}
            wrapperStyle={{ margin: "auto" }}
          />
        ) : (
          <button type="submit">ورود</button>
        )}
      </form>
      <p>
        حساب کاربری ندارید؟ <Link href="/signup">ثبت نام</Link>
      </p>
      <Toaster />
    </div>
  );
}

export default SigninPage;
